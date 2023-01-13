function findShort(s){

  //split string into array of wwords
  return s.split(' ')
  
  //map into array o lengths
          .map(x => x.length)
  
  //sort smallest to large, return [0]
          .sort((a,b)=>a-b)[0]
  
}

//or!
//const findShort = str => str.split(' ').map(x=>x.length).sort((a,b)=>a-b)[0]
