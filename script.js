const btn = document.getElementById( 'btn' );

btn.addEventListener( 'click', function(){
  const cant = document.getElementById( 'cant' ).value;
  const pwd = document.getElementById( 'pwd' );
  const caracteres = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '!', '#', '$', '%', '&', '/', '(', ')', '=', '?', '¿', '¡', '*', '+', '~', '[', ']', '{', '}', '^', '-' ];
  let pwdFinal = '';

  for( let i = 0; i < cant; i++ ) {
    pwdFinal += caracteres[ Math.floor( Math.random() * caracteres.length ) ];
  }
  pwd.innerHTML = pwdFinal;
  console.log( pwdFinal );
} )