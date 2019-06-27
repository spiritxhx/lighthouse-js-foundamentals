const blocksAway = directions => {
  let heading = directions[0] === 'right' ? 'right' : 'up'; //initial heading direction
  let position = directions[0] === 'right' ? [0, directions[1]] : [directions[1], 0]; //initial positon of the driver
  for (let i = 2; i < directions.length; i += 2) {
    switch (heading) {
      case 'up': {
        if (directions[i] === 'left') {
          position[1] -= directions[i + 1];
          heading = 'left';
        } else {
          position[1] += directions[i + 1];
          heading = 'right';
        }
        break;
      }
      case 'down': {
        if (directions[i] === 'left') {
          position[1] += directions[i + 1];
          heading = 'right';
        } else {
          position[1] -= directions[i + 1];
          heading = 'left';
        }
        break;
      }
      case 'left': {
        if (directions[i] === 'left') {
          position[0] -= directions[i + 1];
          heading = 'down';
        } else {
          position[0] += directions[i + 1];
          heading = 'up';
        }
        break;
      }
      case 'right': {
        if (directions[i] === 'left') {
          position[0] += directions[i + 1];
          heading = 'up';
        } else {
          position[0] -= directions[i + 1];
          heading = 'down';
        }
        break;
      }
    }
  }
  return ('east: '+position[1]+', north: '+position[0]);
}
console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
console.log(blocksAway(["left", 1, "right", 1, "left", 1, "right", 1, "left", 1, "right", 1]));
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));