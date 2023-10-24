<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Retrait;
use App\Models\Historique;
use App\Models\Employee;
use App\Models\Articles_en_stock;
use App\Models\Article;
use DB;

class RetraitController extends Controller
{
    //

    function Retrait_pour_emoloyee($request){
        $request=json_decode($request);    
        $db= DB::connection()
        ->select('Select Retrait(?,?) as result',array($request->id_article,$request->quantite_prise));
        if($db[0]->result == 'Quantite introvable dans le Stock'){
            return 'Quantite introvable dans le Stock';
        }else{
        $this->Hisrorique($request);
        
        return 'Operation Validé';
        }
    }

    function Hisrorique($request){
    
        $historique =new \App\Models\Historique;
        $historique->id_employee=$request->id_employee;
        $historique->id_article =$request->id_article;
        $historique->quantite_prise=$request->quantite_prise;
        $historique->save();
     
    }
}
