import type { CalendarEvent } from './events';

type Attendance = { count: number | string; approximate: boolean };

// Reported turnout from the retrospectives and Jurgis’s September 15 updates; excludes RSVPs and form submissions.
const attendanceByEvent: Record<string, Attendance> = {
  'maia-archive-8347ee4073a667a4157573ba06ee8f8f@mitaialignment.org/2026-04-02': { count: 16, approximate: true },
  'maia-archive-3eead03ea045f7dc1715b386d271e6e8@mitaialignment.org/2026-03-31': { count: 14, approximate: true },
  '5lq1ffguo8nlpvv6vfn4a1nn44@google.com/2026-02-12T21:30:00Z': { count: 240, approximate: true },
  'maia-archive-33a39a9fe19563f56735abe5684b7fa5@mitaialignment.org/2026-02-10': { count: '220+', approximate: true },
  '78sbl0kojpb3vcq37mi471qhde@google.com/2026-09-06T19:00:00Z': { count: 21, approximate: true },
  '4fbqug2piuv7hniunr01jd0hgr@google.com/2026-09-05T14:00:00Z': { count: 19, approximate: true },
  'maia-archive-ca2869a6e8b429f9d52e4757a70b52dd@mitaialignment.org/2026-08-28': { count: 40, approximate: true },
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
  '7ncgb2npn6k3ipn5atj981hs56@google.com/2026-09-06T14:00:00Z': { count: 14, approximate: true },
  '5oa8mnfra5idfaeotp3g5s0clc@google.com/2026-09-05T22:00:00Z': { count: 109, approximate: true },
  '545d2vne11hmvund2no6csn2fd@google.com/2026-09-05T15:00:00Z': { count: 20, approximate: true },
  '7e81i63hh3mg753dh2ar60bq81@google.com/2026-09-04T23:30:00Z': { count: 120, approximate: true },
  '7im0v34jts1e6d2csfcg0lr5ta@google.com/2026-09-02T23:00:00Z': { count: 17, approximate: true }
};

export function getEventAttendance(event: CalendarEvent): Attendance | undefined {
  return attendanceByEvent[event.id];
}
