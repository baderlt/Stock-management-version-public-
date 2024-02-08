<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class Gerer_Employees extends Controller
{
    //
    function Ajouter_Employee(Request $req){
        $nouveauEmployee=new \App\Models\Employee;
        $nouveauEmployee->nom_employee=$req->nomEmployee;
        $nouveauEmployee->save();
    }

    function Supprimer_Employee(Request $req){
        
        $employee=new \App\Models\Employee;
        //return $req;
        //"=",$req->id_employee
        $employee->where("id_employee","=",$req->id_employee)->delete();
    }
}
