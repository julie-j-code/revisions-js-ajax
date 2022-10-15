// marche de manière autonome sans avoir besoin de récupérer au préalable books
export function notation (bookId, note, array){
    if (bookId && bookId>0  && note!=null) {
        console.log("ok");        
        console.log(array[bookId]);
        array[bookId].notation=note
    }
}







