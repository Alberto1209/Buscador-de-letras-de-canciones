const  txtArtista  =  documento . getElementById ( "artista" ) ;
const  txtCancion  =  documento . getElementById ( "cancion" ) ;

const  btnBuscar  =  documento . getElementById ( "btn_buscar" ) ;
const  lblSalida  =  documento . getElementById ( "salida" ) ;

btnBuscar . addEventListener ( "clic" ,  función  ( e ) {
    e . preventDefault ( ) ;
    const  artista  =  txtArtista . valor
    const  cancion  =  txtCancion . valor
    consultarAPI ( artista ,  canción ) ;
} ) ;

function  consultarAPI ( artista ,  cancion )  {
    const  enlace  =  `https://api.lyrics.ovh/v1/ $ { artista } / $ { cancion } ` ;
    buscar ( enlace )
        . entonces ( respuesta  =>  respuesta . json ( ) )
        . entonces ( resultado  =>  {
            if  ( resultado . lyrics )  {  // la canción existe
               const  { letra }  =  resultado ;
               lblSalida . innerHTML  =  `
                    <h2> $ { cancion . toUpperCase ( ) } de $ { artista . toUpperCase ( ) } </h2>
                    <pre> $ { letras } </pre>
                    ` ;
            }
            else  {
                lblSalida . innerHTML  =  "La canción no existe" ;
            }
        } )
        . catch ( error  =>  console . log ( error ) ) ;
} 
