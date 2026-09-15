import type { CalendarEvent } from './events';

type Attendance = { count: number | string; approximate: boolean };

// Reported turnout from the Orientation and Spring 2026 retrospectives; excludes RSVPs and form submissions.
const attendanceByEvent: Record<string, Attendance> = {
  'maia-archive-5212b2d5b82f2a5ab23622363753dc54@mitaialignment.org/2026-04-10': { count: 45, approximate: true },
  'maia-archive-4a39baa66dd073deca978020a300db0c@mitaialignment.org/2026-04-03': { count: 45, approximate: true },
  'maia-archive-109e0f5334435411b23c4e054f13bf90@mitaialignment.org/2026-03-27': { count: 45, approximate: true },
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
