<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
Use \Carbon\Carbon;
use DB;

class Bilan extends Controller
{
    //

    public function bilan(){
        $date = Carbon::now();
        // $request=json_decode($request);
        $year=$date->year;
        $month=$date->month;
        $day=$date->day;
       
        $stock= DB::table('articles_en_stock')
        ->join('articles', 'articles_en_stock.id_article', '=', 'articles.id')
        ->select(DB::raw('SUM(articles_en_stock.quantite_courant_article) as sum2,articles.nom_article,articles.id'))
        // ->whereYear('articles_en_stock.created_at','<=',$year)
        // ->whereMonth('articles_en_stock.created_at','<',$month)
        // ->whereDay('articles_en_stock.created_at','>',1)
        ->groupBy('articles.nom_article')
        ->groupBy('articles.id')
        ->orderby('articles.id')
        ->Distinct('articles.nom_article')
        // ->orderBy('historiques.date_retrait','DESC')
        ->get();
    
        function employee($nom_articles){
            $date = Carbon::now();
            $year=$date->year;
            $month=$date->month;
            $day=$date->day;
            return DB::table('historiques')
            ->join('articles', 'historiques.id_article', '=', 'articles.id')
            ->join('employees', 'historiques.id_employee', '=', 'employees.id_employee')
            ->select(DB::raw('SUM(quantite_prise)as sum_prise,employees.nom_employee'))
            ->whereYear('historiques.date_retrait','=',$year)
            // ->whereMonth('historiques.date_retrait','=',$month)
            // ->whereDay('historiques.date_retrait','=',$day)
            ->orderBy('employees.id_employee')
            ->where('articles.nom_article','=',$nom_articles)
            ->groupBy('employees.nom_employee')->distinct('employees.nom_employee')->get(); 
          };
          function calcule($nom){
            $date = Carbon::now();
            $year=$date->year;
            $month=$date->month;
            $day=$date->day;
            $historique=DB::table('historiques')
            ->join('articles', 'historiques.id_article', '=', 'articles.id')
            ->join('employees', 'historiques.id_employee', '=', 'employees.id_employee')
            ->select(DB::raw('SUM(quantite_prise)as sum,articles.nom_article'))
            ->whereYear('historiques.date_retrait','=',$year)
            // ->whereMonth('historiques.date_retrait','=',$month)
            // ->whereDay('historiques.date_retrait','>=',1)
            // ->groupBy('articles.nom_article')
            ->groupBy('articles.nom_article')
            // ->groupBy('employees.nom_employee')
            ->orderby('articles.id')
            ->Distinct('articles.nom_article')
            // ->orderBy('historiques.date_retrait','DESC')
            ->get();
    
            foreach($historique as $histori){
                if($histori->nom_article==$nom){
                   return $histori->sum;
                }
            
            }
            return 0;
          }
        // $count= DB::table('articles_en_stock')->distinct('id_article')->count();
        $aray=array();
        foreach( $stock as $stock){
           
            $arr=['sum'=>$stock->sum2+ calcule($stock->nom_article),'quntite_courant'=>$stock->sum2,'nom'=> $stock->nom_article,'id'=>$stock->id,'employee'=>employee($stock->nom_article)];
            array_push($aray,$arr);
        }
        // return employee('Agenda Spiral A4');
    
        return $aray;
        //return $historique.$stock.$count;
    
    }
    public function produit_Epuise(Request $request ){
      
        return $epuis=DB::table('articles_en_stock')
        ->join('articles', 'articles_en_stock.id_article', '=', 'articles.id')
        ->select(DB::raw('SUM(quantite_courant_article)as qnt,articles.nom_article'))
        ->havingRaw('SUM(quantite_courant_article) <= ?', [$request->qnt])
        ->groupBy('articles.nom_article')
        ->get();}
    
    
}
