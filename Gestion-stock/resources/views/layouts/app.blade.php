<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Gestion-stock') }}</title>
    <link rel="icon" href="{{asset('g_Stock_icon.png')}}" type="image/png">

    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.bunny.net/css?family=Nunito" rel="stylesheet">


    <!-- Scripts -->
    @viteReactRefresh
    @viteReactRefresh
    @viteReactRefresh
    @vite(['resources/sass/app.scss', 'resources/js/app.js'])
    <style>
        
    </style>
</head>
<body style="background-repeat:no-repeat;background-size:contain;background-attachment:fixed ;width:100%;height:100%;
 background-position: center;
 background-size: cover;background-image:url({{asset('G_S_BG.jpg')}})
 ">

    <div id="example">
        <!-- <nav class="navbar navbar-expand-md navbar-light shadow-sm" style="height:135px">
            <div class="container">
                
                    {{-- {{ config('app.name', 'Laravel') }} --}}
                    <img class="logo lazy loaded" src="http://www.mhpv.gov.ma/wp-content/uploads/2021/12/banner-wizara-1-copy.png" data-src="http://www.mhpv.gov.ma/wp-content/uploads/2021/12/banner-wizara-1-copy.png" data-retina="" height="120" style="height:132px" data-was-processed="true" width="90%">
                
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="{{ __('Toggle navigation') }}">
                    <span class="navbar-toggler-icon">  
                      
                        </span>
                </button>
      
                <div class="collapse navbar-collapse" id="navbarSupportedContent" style="text-align: center">
                <div style="text-align: center" style="padding-left: 300px">
                    {{-- <img src="{{asset('logo_maroc.jpeg')}}" alt="logo_maroc" height="70" width="100" style="text-align: center"> --}}
                </div>
                    <!-- Left Side Of Navbar -->
                    <ul class="navbar-nav me-auto">

                    </ul>

                    <!-- Right Side Of Navbar -->
                    <ul class="navbar-nav ms-auto">
                        <!-- Authentication Links -->
                        {{-- @guest
                            @if (Route::has('login'))
                                <li class="nav-item" style="padding-left: 10px">
                                   <button  style="height: 40px; border-radius:15%;background-color:rgb(66, 123, 66)"> <a class="nav-link" href="{{ route('login') }}"><b>{{ __('Login') }}</b></a></button>
                                </li>
                            @endif

                            @if (Route::has('register'))
                                <li class="nav-item" style="padding-left: 10px">
                                   <button style="height: 40px; border-radius:15%;background-color:rgb(66, 123, 66) ;"> <a class="nav-link" href="{{ route('register') }}"><b>{{ __('Register') }}</b></a></button>
                                </li>
                            @endif
                        @else
                            <li class="nav-item dropdown">
                                <a id="navbarDropdown" class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" v-pre>
                                    {{ Auth::user()->name }}
                                </a>

                            
    
                            </li>
                        @endguest --}}
                    </ul>
                </div>
            </div>
        </nav> -->

        <main class="py-4">
            @yield('content')
        </main>
    </div>
</body>
</html>
