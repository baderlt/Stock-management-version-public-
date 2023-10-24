@extends('layouts.app')

@section('content')
@viteReactRefresh
    @viteReactRefresh
    @viteReactRefresh
    @vite(['resources/sass/app.scss', 'resources/js/app.js'])
   
<div class="container" id='ap'  style="opacity: 0.9">
    <div class="row justify-content-center" >
        <div class="col-md-8" >
            <div class="card" style="opacity: 1"s  >
                <div class="card-header"  >  <div class="row">
                    <h1  style="text-align: center;color: rgba(0, 0, 0, 0.699);fontFamily: Segoe UI, Tahoma, Geneva, Verdana, sans-serif,
                        textAlign: center;fontWeight: 500;fontSize:3.5em;opacity:1" >
                        Inscription
                    </h1> </div>

                <div class="card-body">
                    <form method="POST" action="{{ route('register') }}">
                        @csrf

                        <div class="row mb-3">
                            <label for="name" class="col-md-4 col-form-label text-md-end"><b>{{ __('Name') }}</b></label>

                            <div class="col-md-6">
                                <input id="name" type="text" class="form-control @error('username') is-invalid @enderror" name="name" value="{{ old('name') }}" required autocomplete="name" autofocus>

                                @error('name')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                        </div>

                        <div class="row mb-3">
                            <label for="email" class="col-md-4 col-form-label text-md-end"><b>{{ __('Email Address') }}</b></label>

                            <div class="col-md-6">
                                <input id="email" type="email" class="form-control @error('email') is-invalid @enderror" name="email" value="{{ old('email') }}" required autocomplete="email">

                                @error('email')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                        </div>

                        <div class="row mb-3">
                            <label for="password" class="col-md-4 col-form-label text-md-end"><b>{{ __('Password') }}</b></label>

                            <div class="col-md-6">
                                <input id="password" type="password" class="form-control @error('password') is-invalid @enderror" name="password" required autocomplete="new-password">

                                @error('password')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                        </div>

                        <div class="row mb-3">
                            <label for="password-confirm" class="col-md-4 col-form-label text-md-end"><b>{{ __('Confirm Password') }}</b></label>

                            <div class="col-md-6">
                                <input id="password-confirm" type="password" class="form-control" name="password_confirmation" required autocomplete="new-password">
                            </div>
                        </div>

                        <div class="row mb-0">
                            <div class="col-md-6 offset-md-4">
                                <button class="btn btn-primary" style="float: right;padding: 3%;padding-Right: 8%;
                                padding-Left: 8%;marginTop: 8%;border-Radius: 25px;color: purple;border: none;fontWeight: bolder;fontFamily:  sans-serif;opacity:0.9;fontSize:1.9em;
                                background: linear-gradient( 45deg,#62c476,#267c07)" type="submit" > 
                S'inscrire
            </button>    
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>

   
@endsection
