<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
Use DB;
class StockDate extends Controller
{
    //
    public function get_stock_years(){
        return $year=DB::table('stocks')
    ->select( DB::raw('YEAR(date_stock) as year'))
    ->groupBy('year')
    ->get();
    }
     public function get_stock_years_mounth( Request $request){
        return $mounth=DB::table('stocks')
    ->select( DB::raw('MONTH(date_stock) as month'))->whereYear('date_stock','=',$request->year)
    ->groupBy('month')
    ->get();
     }
     public function get_stock_years_mounth_day(Request $request ){
        return $day=DB::table('stocks')
    ->select( DB::raw('Day(date_stock) as day'))
    ->whereMonth('date_stock','=',$request->month)
    ->whereYear('date_stock','=',$request->year)
    ->groupBy('day')
    ->get();;

     }
     public function GET_INFO(Request $request){
        return $info=DB::table('stocks')
        // ->select( '*')
        ->whereMonth('date_stock','=',$request->month)
        ->whereYear('date_stock','=',$request->year)
        ->whereDay('date_stock','=',$request->day)
        ->get();;
     }
     public function get_stock_articles_epuise(Request $request){
        return $epuis=DB::table('articles_en_stock')
        ->select('count(*)')
        ->where('id_stock','=',$request->id)
        ->where('quantite_courant_article','=',0)
      
        ->count();
     }

     public function stock_en_article(Request $request){
        return $info= DB::table('articles_en_stock')
        ->join('articles', 'articles_en_stock.id_article', '=', 'articles.id')
         ->where('id_stock','=',$request->id)
        ->select('articles_en_stock.id_stock','articles_en_stock.id as art_stock','articles_en_stock.quantite_courant_article','articles_en_stock.quantite_initiale_article','articles_en_stock.observation','articles.id', 'articles.nom_article')
        ->get();
     }
}
