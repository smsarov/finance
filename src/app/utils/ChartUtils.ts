interface Flag {
  timeStart: number;
  timeFinish: number;
  openValue: number;
  closeValue: number;
  minValue: number;
  maxValue: number;
}

const BoundariesOfFlagArray = (flags: Flag[]) => {
  return {
    maxValue: flags.reduce(
      (acc, cur) => Math.max(cur.maxValue, acc),
      -Infinity
    ),
    minValue: flags.reduce((acc, cur) => Math.min(cur.minValue, acc), Infinity),
    minTime: flags[0].timeStart,
    maxTime: flags.at(-1)!.timeFinish,
  };
};

export type { Flag };
export {BoundariesOfFlagArray}
