function countPoints(arrCollection) {
  let points = 0;

  if (arrCollection.length !== 10) {
    throw new Error('Number of matches played should be 10!');
  }

  arrCollection.forEach(element => {
    let score = [];
    score = element.split(':');

    if (score[0] < 0 || score[0] > 4 || score[1] < 0 || score[1] > 4) {
      throw new Error('Goals are in the range of [0, 4]!');
    }

    if (score[0] === score[1]) {
      points += 1;
    } else if (score[0] > score[1]) {
      points += 3;
    } else if (score[0] < score[1]) {
      points += 0;
    }
  });

  return points;
}

countPoints(['3:1', '1:0', '0:0', '1:2', '4:0', '2:3', '1:1', '0:1', '2:1', '1:0']);
