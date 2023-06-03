
// エラー: Argument of type 'Human' is not assignable to parameter of type 'Human & Animal'.
//    Property 'species' is missing in type 'Human' but required in type 'Animal'.
mysteryFunc(uhyo);
// エラー: Argument of type 'Animal' is not assignable to parameter of type 'Human & Animal'.
//    Property 'name' is missing in type 'Animal' but required in type 'Human'.
mysteryFunc(cat);