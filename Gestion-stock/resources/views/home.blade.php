<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Gestion_Stock</title>
    

    <link rel="icon" href="{{asset('g_Stock_icon.png')}}" type="image/png">
    {{-- <link href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0-alpha/css/bootstrap.css" rel="stylesheet">

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    
    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.css">
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/js/toastr.min.js"></script> --}}
    
    
    @viteReactRefresh
    @vite(['resources/sass/app.scss', 'resources/js/app.js']) 
    @vite('resources/css/app.css')
    <style>
      #user{
      position: absolute;
      top: 15%;
      border: solid 1px black;
      border-radius: 20%;

      
      }
    
    </style>
</head>
<body >
 {{-- <div id="user">&ensp; <b>{{ Auth::user()->name }}&ensp;</b></div> --}}
    <div id="reactApp"></div>
    @error('nom_article')
    <div id="session" class="bg-red-500 p-6 text-xl border " style="z-index: 2;position:absolute;top: 0;right: 0"> 
       {{-- <span class="invalid-feedback" role="alert"> --}}
                {{ $message }}
        {{-- </span> --}}
    </div>
        
    @enderror
    @if(Session::has('succes'))
  <div id="session" class="bg-green-400 w-50 text-center p-2 text-xl border rounded rounded-2 " style="z-index: 2;position:absolute;top: 0;right: 0">
    <i>
    {{session('succes')}}</i></div>
    @endif
    

   
      </body>
    <script>
   
    </script>
</body>
</html>


