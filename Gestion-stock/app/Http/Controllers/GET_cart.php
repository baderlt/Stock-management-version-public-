<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DB;
Use \Carbon\Carbon;

class GET_cart extends Controller
{
    function GET_cart($request){
  
            $date = Carbon::now();
            $request=json_decode($request);
            $year=$date->year;
              $month=$date->month;
              $day=$date->day;
              if($request->date=='mois'){
            return DB::table('historiques')
            // ->sum('historiques.quantite_prise')
            ->join('articles', 'historiques.id_article', '=', 'articles.id')
            ->join('employees', 'historiques.id_employee', '=', 'employees.id_employee')
             ->select(DB::raw('SUM(historiques.quantite_prise) as SUM,employees.nom_employee,articles.nom_article'))
            ->whereYear('historiques.date_retrait','=',$year)
            ->whereMonth('historiques.date_retrait','=',$month)
            ->groupBy('articles.nom_article')
            ->groupBy('employees.nom_employee')
            ->orderBy('historiques.date_retrait','DESC')
            
            ->get();}
            else if($request->date=='annee'){
              return DB::table('historiques')
              // ->sum('historiques.quantite_prise')
              ->join('articles', 'historiques.id_article', '=', 'articles.id')
              ->join('employees', 'historiques.id_employee', '=', 'employees.id_employee')
               ->select(DB::raw('SUM(historiques.quantite_prise) as SUM,employees.nom_employee,articles.nom_article'))
              ->whereYear('historiques.date_retrait','=',$year)
              // ->whereMonth('historiques.date_retrait','=',$month)
              ->groupBy('articles.nom_article')
              ->groupBy('employees.nom_employee')
              ->orderBy('historiques.date_retrait','DESC')
              
              ->get();
        
        
            } else if($request->date=='jour'){
              return DB::table('historiques')
              // ->sum('historiques.quantite_prise')
              ->join('articles', 'historiques.id_article', '=', 'articles.id')
              ->join('employees', 'historiques.id_employee', '=', 'employees.id_employee')
              ->select(DB::raw('SUM(historiques.quantite_prise) as SUM,employees.nom_employee,articles.nom_article'))
              ->whereYear('historiques.date_retrait','=',$year)
              ->whereMonth('historiques.date_retrait','=',$month)
              ->whereDay('historiques.date_retrait','=',$day)
              ->groupBy('articles.nom_article')
              ->groupBy('employees.nom_employee')
              ->orderBy('historiques.date_retrait','DESC')
              ->get();
        
            }else{
              return DB::table('historiques')
              // ->sum('historiques.quantite_prise')
              ->join('articles', 'historiques.id_article', '=', 'articles.id')
              ->join('employees', 'historiques.id_employee', '=', 'employees.id_employee')
              ->select(DB::raw('SUM(historiques.quantite_prise) as SUM,employees.nom_employee,articles.nom_article'))
              // ->whereYear('historiques.date_retrait','=',$year)
              // ->whereMonth('historiques.date_retrait','=',$month)
              // ->whereDay('historiques.date_retrait','=',$day)
              ->groupBy('articles.nom_article')
              ->groupBy('employees.nom_employee')
              ->orderBy('historiques.date_retrait','DESC')
              ->get();
            }

    }
}
