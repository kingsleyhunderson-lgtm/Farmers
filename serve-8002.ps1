Add-Type -AssemblyName System.Net
$prefix = 'http://localhost:8002/'
$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add($prefix)
try {
  $listener.Start()
  Write-Output "Serving '$pwd' at $prefix"
} catch {
  Write-Error "Failed to start listener: $($_.Exception.Message)"
  exit 1
}

try {
  while ($true) {
    $context = $listener.GetContext()
    $request = $context.Request
    $response = $context.Response

    $path = [System.Web.HttpUtility]::UrlDecode($request.Url.AbsolutePath.TrimStart('/'))
    if ([string]::IsNullOrWhiteSpace($path)) { $path = 'index.html' }
    $fullPath = Join-Path -Path $pwd -ChildPath $path

    if (Test-Path $fullPath -PathType Leaf) {
      $bytes = [System.IO.File]::ReadAllBytes($fullPath)
      if ($fullPath.ToLower().EndsWith('.html')) { $response.ContentType = 'text/html' }
      elseif ($fullPath.ToLower().EndsWith('.css')) { $response.ContentType = 'text/css' }
      elseif ($fullPath.ToLower().EndsWith('.js')) { $response.ContentType = 'application/javascript' }
      elseif ($fullPath.ToLower().EndsWith('.svg')) { $response.ContentType = 'image/svg+xml' }
      elseif ($fullPath.ToLower().EndsWith('.png')) { $response.ContentType = 'image/png' }
      elseif ($fullPath.ToLower().EndsWith('.jpg') -or $fullPath.ToLower().EndsWith('.jpeg')) { $response.ContentType = 'image/jpeg' }
      else { $response.ContentType = 'application/octet-stream' }
      $response.OutputStream.Write($bytes, 0, $bytes.Length)
    } else {
      $response.StatusCode = 404
      $bytes = [Text.Encoding]::UTF8.GetBytes("Not Found: $path")
      $response.OutputStream.Write($bytes, 0, $bytes.Length)
    }
    $response.Close()
  }
} finally {
  $listener.Stop()
}