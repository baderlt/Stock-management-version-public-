export const NEW_STOCK_CREATION_COMPLETED="NEW_STOCK_CREATION_COMPLETED";
export const PRODUCTS_ADDED_COMPLETED="PRODUCTS_ADDED_COMPLETED";
export const GO_NEXT_STEP_STOCK_AND_PRODUCTS_CREATION="GO_NEXT_STEP_STOCK_AND_PRODUCTS_CREATION";

export const completeStockCreation=()=>{
    return {
        type:NEW_STOCK_CREATION_COMPLETED,
        payload:{isStockCreationCompleted:true,
        applyStyleWhenStockCreationCompleted:{".Mui-completed":{color:"green"},
        ".MuiStepLabel-label":{color:"black"}}}
    }
}

export const completeAddingProducts=()=>{
    return {
        type:PRODUCTS_ADDED_COMPLETED,
        payload:true
    }
}

export const goNextStepStockAndProductsCreation=()=>{
    return {
        type:GO_NEXT_STEP_STOCK_AND_PRODUCTS_CREATION,
        payload:{activeStep:1}
    }
}

