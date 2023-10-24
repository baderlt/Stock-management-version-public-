<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
Use \Carbon\Carbon;
use DB;

class GET_Historique extends Controller
{
   function GET_Historique($request){
   
    $request=json_decode($request);
    $tri='DESC';
    $employee=$request->employee ;
    $response;
    if( $request->tri_par=='employees.nom_employee' || $request->tri_par=='articles.nom_article') $tri='ASC';

    
    $date = Carbon::now();
    $year=$date->year;
    $month=$date->month;
    $day=$date->day;
   
    if($request->date=='mois'){
    $response= DB::table('historiques')
    ->join('articles', 'historiques.id_article', '=', 'articles.id')
    ->join('employees', 'historiques.id_employee', '=', 'employees.id_employee')
    ->whereMonth('historiques.date_retrait','=',$month)
    ->whereYear('historiques.date_retrait','=',$year);
}else if($request->date=='annee'){
    $response= DB::table('historiques')
    ->join('articles', 'historiques.id_article', '=', 'articles.id')
    ->join('employees', 'historiques.id_employee', '=', 'employees.id_employee')
    ->whereYear('historiques.date_retrait','=',$year);
}
else if($request->date=='jour'){
 
    
    $response =DB::table('historiques')
    ->join('articles', 'historiques.id_article', '=', 'articles.id')
    ->join('employees', 'historiques.id_employee', '=', 'employees.id_employee')
    ->whereMonth('historiques.date_retrait','=',$month)
    ->whereYear('historiques.date_retrait','=',$year)
    ->whereDay('historiques.date_retrait','=',$day);
  
}else {
 
   $response=DB::table('historiques')
    ->join('articles', 'historiques.id_article', '=', 'articles.id')
    ->join('employees', 'historiques.id_employee', '=', 'employees.id_employee');
}

// return $test=$response->get();
if($employee!='all') {
   $result=$response->where('employees.nom_employee','=',$employee)  
   ->orderBy($request->tri_par,$tri)
   ->get(['historiques.date_retrait','historiques.quantite_prise','employees.nom_employee','articles.nom_article']);
}else {
    $result=$response->orderBy($request->tri_par,$tri)
    ->get(['historiques.date_retrait','historiques.quantite_prise','employees.nom_employee','articles.nom_article']);
}
return $result;
   }

}
