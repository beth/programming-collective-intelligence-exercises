function euclidianDistance(data, key1, key2){
  var total = 0;
  for(key in data[key1]){
    if(data[key2].hasOwnProperty(key)){
      total += Math.pow(data[key1][key] - data[key2][key],2);
    }
  }
  return 1/(1+total);
}

function pearson(data, key1, key2){
  var SSx = 0;
  var SSy = 0;
  var SSxy = 0;
  for(key in data[key1]){
    if(data[key2].hasOwnProperty(key)){
      SSx += Math.pow(data[key1][key],2);
      SSy += Math.pow(data[key2][key],2);
      SSxy += data[key1][key]*data[key2][key];
    }
  }
  return SSxy/(Math.pow((SSx*SSy),0.5));
}