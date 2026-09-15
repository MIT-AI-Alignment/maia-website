import type { CalendarEvent } from './events';

type Attendance = { count: number | string; approximate: boolean; sourceUrl?: string };

// Reported turnout from retrospectives, Jurgis’s updates, and event pages' post-event “Went” totals.
const attendanceByEvent: Record<string, Attendance> = {
  't01e428lq1kfpikvld0k2otm8o@google.com/2026-09-15T15:00:00Z': { count: '350+', approximate: true },
  'aisf-capstone-2026': { count: 43, approximate: true },
  'bp05urquk4n6l0cbj12at0rcno@google.com/2026-05-12T22:00:00Z': { count: 37, approximate: false },
  '8v1dac1vpdp8qo14ruan4glmn0@google.com/2026-05-01T22:00:00Z': { count: 12, approximate: false },
  'maia-archive-2f07819f618e0d9abb5e3cb65b650ad3@mitaialignment.org/2026-04-22': { count: 65, approximate: false },
  'kkfkde5t51ah5qp8jsh3hmln3s@google.com/2026-04-19T00:30:00Z': { count: 113, approximate: true },
  'ihbf247eorb6sscc2g5lmfiqsc@google.com/2026-04-18T17:00:00Z': { count: '330+', approximate: true },
  'lajp0v94h503pbjnakll1ccpcc@google.com/2026-04-18T17:00:00Z': { count: '430+', approximate: true },
  '10npmtes54dj298dqlmks4f49k@google.com/2026-04-17T19:30:00Z': { count: '350+', approximate: true },
  'ilspfi4b0qaign5i6rlgchb5e4@google.com/2026-04-18T01:00:00Z': { count: '120+', approximate: true },
  'f0iig47o8k1u4ehgiovpsfjfg0@google.com/2026-04-16T23:00:00Z': { count: 34, approximate: true },
  'maia-archive-8347ee4073a667a4157573ba06ee8f8f@mitaialignment.org/2026-04-02': { count: 16, approximate: true },
  'maia-archive-3eead03ea045f7dc1715b386d271e6e8@mitaialignment.org/2026-03-31': { count: 14, approximate: true },
  '5lq1ffguo8nlpvv6vfn4a1nn44@google.com/2026-02-12T21:30:00Z': { count: 240, approximate: true },
  'maia-archive-33a39a9fe19563f56735abe5684b7fa5@mitaialignment.org/2026-02-10': { count: 560, approximate: false, sourceUrl: 'https://luma.com/qqrie5o3' },
  '78sbl0kojpb3vcq37mi471qhde@google.com/2026-09-06T19:00:00Z': { count: 21, approximate: true },
  '4fbqug2piuv7hniunr01jd0hgr@google.com/2026-09-05T14:00:00Z': { count: 19, approximate: true },
  'maia-archive-ca2869a6e8b429f9d52e4757a70b52dd@mitaialignment.org/2026-08-28': { count: 32, approximate: true },
  'maia-archive-afdbbd6393f424b4e44b8855bdb346b6@mitaialignment.org/2025-11-14': { count: 40, approximate: true },
  'maia-archive-24894dcb2b87170d2691fe8d6607192a@mitaialignment.org/2025-11-07': { count: 40, approximate: true },
  'maia-archive-f186911bb32c98a3e7c529626bcac594@mitaialignment.org/2025-04-11': { count: 40, approximate: true },
  'maia-archive-80d8d3412cd28bb2804dd33d11f52887@mitaialignment.org/2025-04-04': { count: 40, approximate: true },
  'maia-archive-2e0b70d858abc6fe30d9753892b4f037@mitaialignment.org/2025-03-28': { count: 40, approximate: true },
  'maia-archive-27c38e650a60eb3e11678dde135588ec@mitaialignment.org/2024-11-15': { count: 40, approximate: true },
  'maia-archive-83e76610456110458d5fed09b223ffb8@mitaialignment.org/2024-11-01': { count: 40, approximate: true },
  'maia-archive-f90bc6a38f3e9d94d83b8e17df18efa5@mitaialignment.org/2024-04-05': { count: 40, approximate: true },
  'maia-archive-b9c098dda753a313ab459c9a0a56a3d4@mitaialignment.org/2024-03-29': { count: 40, approximate: true },
  'maia-archive-8d536f78c9824c3ad979fbf9bfcf3870@mitaialignment.org/2024-03-22': { count: 40, approximate: true },
  'maia-archive-8209fea9a1a2ba68dd81c8746c3a044e@mitaialignment.org/2023-11-17': { count: 40, approximate: true },
  'maia-archive-0e2d8c90e53e8776cbe77402842d0af2@mitaialignment.org/2023-11-10': { count: 40, approximate: true },
  '048peimga0769t74arerciidtn@google.com/2026-09-08T17:00:00Z': { count: '200+', approximate: true },
  '2imhqm5t4ptse1lu2r1t0q423p@google.com/2026-09-04T18:30:00Z': { count: '450+', approximate: true },
  'maia-archive-5212b2d5b82f2a5ab23622363753dc54@mitaialignment.org/2026-04-10': { count: 40, approximate: true },
  'maia-archive-4a39baa66dd073deca978020a300db0c@mitaialignment.org/2026-04-03': { count: 40, approximate: true },
  'maia-archive-109e0f5334435411b23c4e054f13bf90@mitaialignment.org/2026-03-27': { count: 40, approximate: true },
  '6ja895bhclgqneiankcah6ugl0@google.com/2026-09-07T21:30:00Z': { count: 102, approximate: false },
  '67nup42v5rga1hd39984n05da5@google.com/2026-09-07T21:00:00Z': { count: '40+', approximate: false },
  '7ncgb2npn6k3ipn5atj981hs56@google.com/2026-09-06T14:00:00Z': { count: 21, approximate: false, sourceUrl: 'https://partiful.com/e/UBZPLn8pwDSahW5WScIL' },
  '5oa8mnfra5idfaeotp3g5s0clc@google.com/2026-09-05T22:00:00Z': { count: 109, approximate: false, sourceUrl: 'https://partiful.com/e/MeP3Pu6eCsri65ml6MOQ' },
  '545d2vne11hmvund2no6csn2fd@google.com/2026-09-05T15:00:00Z': { count: 19, approximate: false, sourceUrl: 'https://partiful.com/e/sHHsvkCC5JQ0WBFw3b7J' },
  '7e81i63hh3mg753dh2ar60bq81@google.com/2026-09-04T23:30:00Z': { count: 132, approximate: false, sourceUrl: 'https://partiful.com/e/z9BcsIsKg9lJ3OLqqqCv' },
  '7im0v34jts1e6d2csfcg0lr5ta@google.com/2026-09-02T23:00:00Z': { count: 17, approximate: true }
};

export function getEventAttendance(event: CalendarEvent): Attendance | undefined {
  return attendanceByEvent[event.id];
}
