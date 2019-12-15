function buildHistogram(magazine) {
  let histogram = {};
  magazine.forEach((l) => {
    if (histogram[l]) {
      histogram[l] += 1;
    } else {
      histogram[l] = 1;
    };
  });

  return histogram;
};

function canBuildNote(magazine, note) {
  let canBuild = true;
  
  note.split('').forEach(l => {
    if (magazine.includes(l)) {
      const target = magazine.indexOf(l);
      magazine.splice(target, 1);
    }
    else {
      canBuild = false;
    };
  });

  return canBuild;
}
