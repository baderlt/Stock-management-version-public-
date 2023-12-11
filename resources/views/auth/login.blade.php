@extends('layouts.app')

@section('content')
<div class="container" style="marggin: top 600px; pading: top 40px; opacity: 0.9">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header"  >  <div class="row">
                    <h1  style="text-align: center;color: rgba(0, 0, 0, 0.699);fontFamily: Segoe UI, Tahoma, Geneva, Verdana, sans-serif,
                        textAlign: center;fontWeight: 500;fontSize:3.5em;opacity:1" >
                        Se Connecter
                    </h1> </div>

                <div class="card-body">
                    <form method="POST" action="{{ route('login') }}" >
                        @csrf

                        <div class="row mb-3">
                            <label for="email" class="col-md-4 col-form-label text-md-end"><b>{{ __('Adresse e-mail') }}</b></label>

                            <div class="col-md-6">
                                <input id="email" type="email" class="form-control @error('email') is-invalid @enderror" value='test@test.com'  name="email" value="{{ old('email') }}" required autocomplete="email" autofocus>

                                @error('email')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                        </div>

                        <div class="row mb-3">
                            <label for="password" class="col-md-4 col-form-label text-md-end"><b>{{ __('Mote de pass') }}</b></label>

                            <div class="col-md-6">
                                <input id="password" type="password" class="form-control @error('password') is-invalid @enderror" value='12345678' name="password" required autocomplete="current-password">

                                @error('password')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                        </div>

                        <div class="row mb-3">
                            <div class="col-md-6 offset-md-4">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" name="remember" id="remember" {{ old('remember') ? 'checked' : '' }}>

                                    <label class="form-check-label" for="remember">
                                        {{ __('Se rappeler de moi') }}
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div class="row mb-0">
                            <div class="col-md-8 offset-md-4">
                                <button type="submit" class="btn btn-primary" style="float: right;padding: 3%;padding-Right: 8%;padding-Left: 8%;marginTop: 8%;border-Radius: 25px;color: rgb(8, 8, 8);border: none;fontWeight: bolder;fontFamily:  sans-serif;opacity:0.9;fontSize:1.9em;background: linear-gradient( 45deg,#66a6db,#1e5fe0)">
                                  <b>  {{ __('Se Connecter') }}</b>
                                </button>

                                {{-- @if (Route::has('password.request'))
                                    <a class="btn btn-link" href="{{ route('password.request') }}">
                                        {{ __('Forgot Your Password?') }}
                                    </a>
                                @endif --}}
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
