<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Articles_en_stock extends Model
{
    use HasFactory;
    protected $table='articles_en_stock';
    protected $fillable = [
        'quantite_courant_article',
        'id_article ',
        'quantite_initiale_article',
        'id_stock '
    ];
}
