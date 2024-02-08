<?php

use Illuminate\Support\Facades\Route;
use App\Models\User;
use App\Models\Article;
use Illuminate\Http\Request;
use App\Models\Articles_en_stock;
use App\Models\Stock;
Use \Carbon\Carbon;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return redirect('login');
});

Auth::routes(['register' => false]);

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');


Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
Route::post('/ajoute_article',[App\Http\Controllers\Article::class,'Ajoute_article']);

Route::get('/getuser',function(){
  $user= Auth::user()->name;
  return $user;
});
Route::get('/article_data',function(){
    $liste= Article::get();
    return $liste;
  });

Route::post('/ajout_stock/{request}',[App\Http\Controllers\Ajout_stock::class,'Ajout_Stock'])  ;
Route::get('/get_stock_years',[App\Http\Controllers\StockDate::class,'get_stock_years'])  ;
Route::get('/get_stock_years_mounth/{year}',[App\Http\Controllers\StockDate::class,'get_stock_years_mounth'])  ;
Route::get('/get_stock_years_mounth_day/{month?}/{year?}',[App\Http\Controllers\StockDate::class,'get_stock_years_mounth_day'])  ;
Route::get('/GET_INFO/{year?}/{month?}/{day}',[App\Http\Controllers\StockDate::class,'GET_INFO'])  ;
Route::get('/get_stock_articles_epuise/{id?}',[App\Http\Controllers\StockDate::class,'get_stock_articles_epuise'])  ;
Route::get('/stock_en_article/{id}',[App\Http\Controllers\StockDate::class,'stock_en_article'])  ;


// Route::get('stock_en_article/{id}', function($id){
//  return $info= DB::table('articles_en_stock')
//     ->join('articles', 'articles_en_stock.id_article', '=', 'articles.id')
//      ->where('id_stock','=',$id)
//     ->select('articles_en_stock.id_stock','articles_en_stock.id as art_stock','articles_en_stock.quantite_courant_article','articles_en_stock.quantite_initiale_article','articles_en_stock.observation','articles.id', 'articles.nom_article')
//     ->get();
// });



Route::post('/Retrait_pour_emoloyee/{request}', [App\Http\Controllers\RetraitController::class,'Retrait_pour_emoloyee'])->name('Retrait');

Route::get('/quantite_en_stock/{id?}', function($id){
    return $info=  DB::table('articles_en_stock')
        ->where('id_article','=',$id)
        ->sum('quantite_courant_article');
   });
   
   
Route::put('/Update_articles_en_stocl/{request}', [App\Http\Controllers\Update_articles_en_stock::class,'Update_article_en_stock']);  


Route::get('/get_last_stock',function(){
    $id= Stock::max('id_stock');;
    return $id;
  });

  Route::post('/Ajoute_article_en_stock/{request}',[App\Http\Controllers\Ajoute_article_en_stock::class,'Ajoute_article_en_stock'])->name('Ajoute_article_en_stock'); 
  Route::delete('/Suprimer_article_en_stock/{request}',[App\Http\Controllers\Suprimer_article_en_stock::class,'Suprimer_article_en_stock'])->name('Suprimer_article_en_stock'); 

  Route::get('/get_employe',function(){
    return DB::table('employees')->get();

  })->name('employees');



  Route::get('/Get_historique/{request?}', [App\Http\Controllers\GET_Historique::class,'GET_Historique']);
  Route::get('/annuler_retrait/{request?}', [App\Http\Controllers\GET_Historique::class,'Annuler_retrait']);
  Route::get('/GET_cart/{request?}', [App\Http\Controllers\GET_cart::class,'GET_cart']);


////// backend Mohamed


Route::post('/ajouterEmployee', [App\Http\Controllers\Gerer_Employees::class,'Ajouter_Employee'])->name('Ajouter_Employee');

Route::get("/listeEmployees",function(Request $req){
    $listeEmployees=new \App\Models\Employee;
    return $listeEmployees->select("id_employee","nom_employee")->get();
});

Route::post('/supprimerEmployee',[App\Http\Controllers\Gerer_Employees::class,'Supprimer_Employee'])->name('Supprimer_Employee');


Route::get("/listeArticles",function(Request $req){
    $article=new \App\Models\Article;
    return $article->select("id","nom_article","unite")->get();
});

Route::delete('/supprimerArticle', [App\Http\Controllers\Gerer_Articles::class,'Supprimer_Article'])->name('Supprimer_Article');

Route::post('/ajouterArticle', [App\Http\Controllers\Gerer_Articles::class,'Ajouter_Article'])->name('Ajouter_Article');


Route::get('bilan',[App\Http\Controllers\Bilan::class,'bilan']);
Route::get('/produit_Epuise/{qnt?}',[App\Http\Controllers\Bilan::class,'produit_Epuise']);
