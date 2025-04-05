export const settings = [
  {
    key: 'quantity',
    options: [
      { value: 6, label: 6, variant: 'default' },
      { value: 9, label: 9, variant: 'default' },
      { value: 12, label: 12, variant: 'default' },
    ],
  },
  {
    key: 'speed',
    options: [
      { value: 0, label: 'translation:button.speed.normal', variant: 'default' },
      { value: 1, label: 'translation:button.speed.fast', variant: 'default' },
      { value: 2, label: 'translation:button.speed.crazy', variant: 'default' },
    ],
  },
  {
    key: 'time',
    options: [
      { value: 30, label: '00:30', variant: 'accent' },
      { value: 60, label: '01:00', variant: 'accent' },
      { value: 90, label: '01:30', variant: 'accent' },
    ],
  },
];
