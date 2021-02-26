

//auxiliar functions

function to_uppercase(char){
  switch(char){
    case 'A':
      return 'a';
    case 'B':
      return 'b';
    case 'C':
      return 'c';
    case 'D':
      return 'd';
    case 'E':
      return 'e';
    case 'F':
      return 'f';
    case 'G':
      return 'g';
    case 'H':
      return 'h';
    case 'I':
      return 'i';
    case 'J':
      return 'j';
    case 'K':
      return 'k';
    case 'L':
      return 'l';
    case 'M':
      return 'm';
    case 'N':
      return 'n';
    case 'O':
      return 'o';
    case 'P':
      return 'p';
    case 'Q':
      return 'q';
    case 'R':
      return 'r';
    case 'S':
      return 's';
    case 'T':
      return 't';
    case 'U':
      return 'u';
    case 'V':
      return 'v';
    case 'W':
      return 'w';
    case 'X':
      return 'x';
    case 'Y':
      return 'y';
    case 'Z':
      return 'z';
    default:
      return char;
  }
}

function to_lowercase(char){
  switch(char){
    case 'a':
      return 'A';
    case 'b':
      return 'B';
    case 'c':
      return 'C';
    case 'd':
      return 'D';
    case 'e':
      return 'E';
    case 'f':
      return 'F';
    case 'g':
      return 'G';
    case 'h':
      return 'H';
    case 'i':
      return 'I';
    case 'j':
      return 'J';
    case 'k':
      return 'K';
    case 'l':
      return 'L';
    case 'm':
      return 'M';
    case 'n':
      return 'N';
    case 'o':
      return 'O';
    case 'p':
      return 'P';
    case 'q':
      return 'Q';
    case 'r':
      return 'R';
    case 's':
      return 'S';
    case 't':
      return 'T';
    case 'u':
      return 'U';
    case 'v':
      return 'V';
    case 'w':
      return 'W';
    case 'x':
      return 'X';
    case 'y':
      return 'Y';
    case 'z':
      return 'Z';
    default:
      return char;
  }
}

function is_equal(char_aux, char){
  if (is_alpha(char)){
    if (char_aux === char || char_aux === to_lowercase(char) || char_aux === to_uppercase(char)){
      return true;
    }
  }else {
    if (char_aux === char){
      return true;
    }
    else {
      return false;
    }
  }
}

function count_char_in_array(string, char){
  var count = 0;
  var final_count = 0;
  var count_rest = 0;
  while (count < count_chars(string)){
    count_rest = count % 2;
    if (is_equal(string[count], char) && count_rest === 1){
      final_count++;
    }
    count++;
  }
  return final_count;
}

function is_odd(element){
  var condition = element % 2;
  switch(condition) {
    case 0:
      return false;
    case 1:
      return true;
    default:
      return false;
  }
}

function is_even(element){
  var condition = element % 2;
  switch(condition) {
    case 0:
      return true;
    case 1:
      return false;
    default:
      return false;
  }
}

function is_alpha(char){
  if ((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z')){
    return true;
  }
  return false;
}

function equal_instance(aux, char){
  if (aux === char || aux === to_uppercase(char) || aux === to_lowercase(char)){
    return true;
  }
  return false;
}

function is_alphanumeric(char){
  if ((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z') || (char >= '0' && char <= '9')){
    return true;
  }
  return false;
}

function count_chars(string){
  index = 0;
  while (string[index] !== undefined){
    index++;
  }
  return index;
}

function create_stars(int){
  aux = "";
  while (int > 0){
    aux = aux + "*";
    int--;
  }
  return aux;
}

function remove_odd_numbers(array){
  var count = 0;
  var result = '';
  while (count < count_chars(array)){
    if (!is_odd(array[count])){
      result = result + array[count];
    }
    if ((count + 1) < count_chars(array) && !is_odd(array[count + 1]) && count_chars(result) > 0){
      result = result + '-';
    }
    count++;
  }
  return result;
}

function remove_even_numbers(array){
  var count = 0;
  var result = '';
  while (count < count_chars(array)){
    if (!is_even(array[count])){
      result = result + array[count];
    }
    if ((count + 1) < count_chars(array) && !is_even(array[count + 1]) && count_chars(result) > 0){
      result = result + '-';
    }
    count++;
  }
  return result;
}

// function 1

function count_alphanumeric(string){
  index_count = count_chars(string);
  count = 0;
  while (index_count > 0){
    if (is_alphanumeric(string[index_count - 1])){
      count++;
    }
    index_count--;
  }
  return count;
}

// function 2

function add_stars(string, int){
  final_string = create_stars(int) + string;
  final_string = final_string + create_stars(int);
  return final_string;
}

// function 3

function search(string, char){
  var max_count = count_chars(string);
  var count = 0;
  var result = ''
  var aux = ''
  while (count < max_count){
    aux = string[count];
    if (is_alpha(aux) && is_alpha(char)){
      if (equal_instance(char, aux)){
        if (aux >= 'a' && aux <= 'z'){
          result = result + to_uppercase(aux);
        }
        if (aux >= 'A' && aux <= 'Z'){
          result = result + to_lowercase(aux);
        }
      }else{
        result = result + string[count];
      }
    }else{
      result = result + string[count];
    }
    count++;
  }
  return result;
}

// function 4

function filter(array, oddOrEven){
  if (oddOrEven === "odd"){
    return remove_odd_numbers(array);
  }else if (oddOrEven === "even") {
    return remove_even_numbers(array);
  }else {
    return "Filter invalid!"
  }
}

// function 5

function sum(array, int){
  var count = 0;
  var result = 0;
  var maxCount = count_chars(array);
  while (count < maxCount) {
    if (result >= int){
      return result;
    }
    result = result + array[count];
    count++;
  }
  return result;
}

// function 7

function remove_char(array, char){
  var count = 0;
  var inner_count = 0;
  var aux = '';
  var result = '';
  while (count < count_chars(array)){
    aux = array[count];
    while (inner_count < count_chars(aux)){
      if (!is_equal(aux[inner_count], char)){
        result = result + aux[inner_count];
      }
      inner_count++;
    }
    inner_count = 0;
    count++;
    if ( count < count_chars(array)){
      result = result + ',';
    }
  }
  return result;
}

// function 8

function search_char(array, char){
  var count = 0;
  var result = '';
  while (count < count_chars(array)){
    result = result + count_char_in_array(array[count], char);
    if ((count + 1) < count_chars(array) && count_chars(result) > 0){
      result = result + '-';
    }
    count++;
  }
  return result;
}