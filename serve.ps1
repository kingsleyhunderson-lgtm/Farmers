param([int]$Port = 8000)

$root = (Get-Location).Path
$prefix = "http://localhost:$Port/"

$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add($prefix)
try {
  $listener.Start()
  Write-Host "Serving $root at $prefix (Press Ctrl+C to stop)"
} catch {
  Write-Error "Failed to start listener: $($_.Exception.Message)"
  exit 1
}

function Get-ContentType($ext){
  switch ($ext.ToLower()) {
    '.html' { 'text/html' }
    '.css'  { 'text/css' }
    '.js'   { 'application/javascript' }
    '.png'  { 'image/png' }
    '.jpg'  { 'image/jpeg' }
    '.jpeg' { 'image/jpeg' }
    '.svg'  { 'image/svg+xml' }
    '.json' { 'application/json' }
    default { 'application/octet-stream' }
  }
}

while ($listener.IsListening) {
  try {
    $context = $listener.GetContext()
    $req = $context.Request
    $res = $context.Response

    $path = $req.Url.LocalPath.TrimStart('/')
    if ([string]::IsNullOrWhiteSpace($path)) { $path = 'index.html' }
    $file = Join-Path $root $path

    if (Test-Path $file) {
      $bytes = [System.IO.File]::ReadAllBytes($file)
      $res.StatusCode = 200
      $res.ContentType = Get-ContentType ([System.IO.Path]::GetExtension($file))
      $res.ContentLength64 = $bytes.Length
      $res.OutputStream.Write($bytes,0,$bytes.Length)
    } else {
      $res.StatusCode = 404
      $msg = "Not Found"
      $bytes = [System.Text.Encoding]::UTF8.GetBytes($msg)
      $res.ContentType = 'text/plain'
      $res.ContentLength64 = $bytes.Length
      $res.OutputStream.Write($bytes,0,$bytes.Length)
    }
    $res.OutputStream.Close()
  } catch {
    Write-Warning "Request error: $($_.Exception.Message)"
  }
}