<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
 use App\Http\Requests\NauveauStock;
 use Illuminate\Support\Facades\Validator;
 use DB;
class Ajout_stock extends Controller
{
    function Ajout_Stock($request){

        // $this->validate($request, [
            
        //     'nombre_articles' => ['required', 'max:255'],
        // ]);
// // return $request->all();
$request=json_decode($request);
//  return $request->date_stock;
        $stock=new \App\Models\Stock;
        $stock->date_stock=$request->date_stock;
        $stock->nombre_article=$request->nombre_article; 
        $stock->montant_totale=$request->montant_totale;
        $stock->save();
//  return back()->with('succes',$request->date_stock);
      return 'Operation Validé';
       
        
    }
}
