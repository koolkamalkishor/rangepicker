/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as moment_ from 'moment';
/** @type {?} */
var moment = moment_;
/** @type {?} */
export var presets = [
    {
        start: moment().startOf('day'),
        end: moment().endOf('day'),
        code: 'TODAY'
    },
    {
        start: moment().subtract(1, 'day').startOf('day'),
        end: moment().subtract(1, 'day').endOf('day'),
        code: 'YESTERDAY'
    },
    {
        start: moment().subtract(2, 'day').startOf('day'),
        end: moment().subtract(2, 'day').endOf('day'),
        code: 'DAY_BEFORE_YESTERDAY'
    },
    {
        start: moment().startOf('isoWeek').startOf('day'),
        end: moment().endOf('day'),
        code: 'CURRENT_WEEK'
    },
    {
        start: moment().startOf('month'),
        end: moment().endOf('day'),
        code: 'CURRENT_MONTH'
    },
    {
        start: moment().startOf('quarter'),
        end: moment().endOf('day'),
        code: 'CURRENT_QUARTER'
    },
    {
        start: moment().startOf('year'),
        end: moment().endOf('day'),
        code: 'CURRENT_YEAR'
    },
    {
        start: moment().subtract(1, 'w').startOf('isoWeek'),
        end: moment().subtract(1, 'w').endOf('isoWeek'),
        code: 'PAST_WEEK'
    },
    {
        start: moment().subtract(1, 'M').startOf('month'),
        end: moment().subtract(1, 'M').endOf('month'),
        code: 'PAST_MONTH'
    },
    {
        start: moment().subtract(1, 'y').startOf('year'),
        end: moment().subtract(1, 'y').endOf('year'),
        code: 'PAST_YEAR'
    },
    /*
    {
        start: moment().subtract(15, 'm'),
        end: moment(),
        code: 'LAST_15_MIN'
    },
    {
        start: moment().subtract(30, 'm'),
        end: moment(),
        code: 'LAST_30_MIN'
    },
    {
        start: moment().subtract(1, 'h'),
        end: moment(),
        code: 'LAST_HOUR'
    },
    {
        start: moment().subtract(4, 'h'),
        end: moment(),
        code: 'LAST_4_HOURS'
    },
    {
        start: moment().subtract(12, 'h'),
        end: moment(),
        code: 'LAST_12_HOURS'
    },
    {
        start: moment().subtract(1, 'd'),
        end: moment(),
        code: 'LAST_24_HOURS'
    },
    */
    {
        start: moment().subtract(7, 'd').startOf('day'),
        end: moment().endOf('day'),
        code: 'LAST_7_DAYS'
    },
    {
        start: moment().subtract(30, 'd').startOf('day'),
        end: moment().endOf('day'),
        code: 'LAST_30_DAYS'
    },
    {
        start: moment().subtract(60, 'd').startOf('day'),
        end: moment().endOf('day'),
        code: 'LAST_60_DAYS'
    },
    {
        start: moment().subtract(3, 'M').startOf('day'),
        end: moment().endOf('day'),
        code: 'LAST_QUARTER'
    },
    {
        start: moment().subtract(6, 'M').startOf('day'),
        end: moment().endOf('day'),
        code: 'LAST_6_MONTHS'
    },
    {
        start: moment().subtract(1, 'y').startOf('day'),
        end: moment().endOf('day'),
        code: 'LAST_YEAR'
    },
    {
        start: moment().subtract(2, 'y').startOf('day'),
        end: moment().endOf('day'),
        code: 'LAST_2_YEARS'
    }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlc2V0cy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzZ3YvcmFuZ2VwaWNrZXIvIiwic291cmNlcyI6WyJsaWIvcHJlc2V0cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxLQUFLLE9BQU8sTUFBTSxRQUFRLENBQUM7O0lBQzVCLE1BQU0sR0FBRyxPQUFPOztBQUV0QixNQUFNLEtBQU8sT0FBTyxHQUFHO0lBQ3RCO1FBQ0MsS0FBSyxFQUFFLE1BQU0sRUFBRSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7UUFDOUIsR0FBRyxFQUFFLE1BQU0sRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUM7UUFDMUIsSUFBSSxFQUFFLE9BQU87S0FDYjtJQUNEO1FBQ0MsS0FBSyxFQUFFLE1BQU0sRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQztRQUNqRCxHQUFHLEVBQUUsTUFBTSxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDO1FBQzdDLElBQUksRUFBRSxXQUFXO0tBQ2pCO0lBQ0Q7UUFDQyxLQUFLLEVBQUUsTUFBTSxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDO1FBQ2pELEdBQUcsRUFBRSxNQUFNLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUM7UUFDN0MsSUFBSSxFQUFFLHNCQUFzQjtLQUM1QjtJQUNEO1FBQ0MsS0FBSyxFQUFFLE1BQU0sRUFBRSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDO1FBQ2pELEdBQUcsRUFBRSxNQUFNLEVBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDO1FBQzFCLElBQUksRUFBRSxjQUFjO0tBQ3BCO0lBQ0Q7UUFDQyxLQUFLLEVBQUUsTUFBTSxFQUFFLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQztRQUNoQyxHQUFHLEVBQUUsTUFBTSxFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQztRQUMxQixJQUFJLEVBQUUsZUFBZTtLQUNyQjtJQUNEO1FBQ0MsS0FBSyxFQUFFLE1BQU0sRUFBRSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUM7UUFDbEMsR0FBRyxFQUFFLE1BQU0sRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUM7UUFDMUIsSUFBSSxFQUFFLGlCQUFpQjtLQUN2QjtJQUNEO1FBQ0MsS0FBSyxFQUFFLE1BQU0sRUFBRSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7UUFDL0IsR0FBRyxFQUFFLE1BQU0sRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUM7UUFDMUIsSUFBSSxFQUFFLGNBQWM7S0FDcEI7SUFDRDtRQUNDLEtBQUssRUFBRSxNQUFNLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUM7UUFDbkQsR0FBRyxFQUFFLE1BQU0sRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQztRQUMvQyxJQUFJLEVBQUUsV0FBVztLQUNqQjtJQUNEO1FBQ0MsS0FBSyxFQUFFLE1BQU0sRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQztRQUNqRCxHQUFHLEVBQUUsTUFBTSxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDO1FBQzdDLElBQUksRUFBRSxZQUFZO0tBQ2xCO0lBQ0Q7UUFDQyxLQUFLLEVBQUUsTUFBTSxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO1FBQ2hELEdBQUcsRUFBRSxNQUFNLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUM7UUFDNUMsSUFBSSxFQUFFLFdBQVc7S0FDakI7SUFDRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztNQStCRTtJQUNGO1FBQ0MsS0FBSyxFQUFFLE1BQU0sRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQztRQUMvQyxHQUFHLEVBQUUsTUFBTSxFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQztRQUMxQixJQUFJLEVBQUUsYUFBYTtLQUNuQjtJQUNEO1FBQ0MsS0FBSyxFQUFFLE1BQU0sRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFFLEVBQUUsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQztRQUNoRCxHQUFHLEVBQUUsTUFBTSxFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQztRQUMxQixJQUFJLEVBQUUsY0FBYztLQUNwQjtJQUNEO1FBQ0MsS0FBSyxFQUFFLE1BQU0sRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFFLEVBQUUsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQztRQUNoRCxHQUFHLEVBQUUsTUFBTSxFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQztRQUMxQixJQUFJLEVBQUUsY0FBYztLQUNwQjtJQUNEO1FBQ0MsS0FBSyxFQUFFLE1BQU0sRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQztRQUMvQyxHQUFHLEVBQUUsTUFBTSxFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQztRQUMxQixJQUFJLEVBQUUsY0FBYztLQUNwQjtJQUNEO1FBQ0MsS0FBSyxFQUFFLE1BQU0sRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQztRQUMvQyxHQUFHLEVBQUUsTUFBTSxFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQztRQUMxQixJQUFJLEVBQUUsZUFBZTtLQUNyQjtJQUNEO1FBQ0MsS0FBSyxFQUFFLE1BQU0sRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQztRQUMvQyxHQUFHLEVBQUUsTUFBTSxFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQztRQUMxQixJQUFJLEVBQUUsV0FBVztLQUNqQjtJQUNEO1FBQ0MsS0FBSyxFQUFFLE1BQU0sRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQztRQUMvQyxHQUFHLEVBQUUsTUFBTSxFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQztRQUMxQixJQUFJLEVBQUUsY0FBYztLQUNwQjtDQUNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgbW9tZW50XyBmcm9tICdtb21lbnQnO1xyXG5jb25zdCBtb21lbnQgPSBtb21lbnRfO1xyXG5cclxuZXhwb3J0IGNvbnN0IHByZXNldHMgPSBbXHJcblx0e1xyXG5cdFx0c3RhcnQ6IG1vbWVudCgpLnN0YXJ0T2YoJ2RheScpLFxyXG5cdFx0ZW5kOiBtb21lbnQoKS5lbmRPZignZGF5JyksXHJcblx0XHRjb2RlOiAnVE9EQVknXHJcblx0fSxcclxuXHR7XHJcblx0XHRzdGFydDogbW9tZW50KCkuc3VidHJhY3QoMSwgJ2RheScpLnN0YXJ0T2YoJ2RheScpLFxyXG5cdFx0ZW5kOiBtb21lbnQoKS5zdWJ0cmFjdCgxLCAnZGF5JykuZW5kT2YoJ2RheScpLFxyXG5cdFx0Y29kZTogJ1lFU1RFUkRBWSdcclxuXHR9LFxyXG5cdHtcclxuXHRcdHN0YXJ0OiBtb21lbnQoKS5zdWJ0cmFjdCgyLCAnZGF5Jykuc3RhcnRPZignZGF5JyksXHJcblx0XHRlbmQ6IG1vbWVudCgpLnN1YnRyYWN0KDIsICdkYXknKS5lbmRPZignZGF5JyksXHJcblx0XHRjb2RlOiAnREFZX0JFRk9SRV9ZRVNURVJEQVknXHJcblx0fSxcclxuXHR7XHJcblx0XHRzdGFydDogbW9tZW50KCkuc3RhcnRPZignaXNvV2VlaycpLnN0YXJ0T2YoJ2RheScpLFxyXG5cdFx0ZW5kOiBtb21lbnQoKS5lbmRPZignZGF5JyksXHJcblx0XHRjb2RlOiAnQ1VSUkVOVF9XRUVLJ1xyXG5cdH0sXHJcblx0e1xyXG5cdFx0c3RhcnQ6IG1vbWVudCgpLnN0YXJ0T2YoJ21vbnRoJyksXHJcblx0XHRlbmQ6IG1vbWVudCgpLmVuZE9mKCdkYXknKSxcclxuXHRcdGNvZGU6ICdDVVJSRU5UX01PTlRIJ1xyXG5cdH0sXHJcblx0e1xyXG5cdFx0c3RhcnQ6IG1vbWVudCgpLnN0YXJ0T2YoJ3F1YXJ0ZXInKSxcclxuXHRcdGVuZDogbW9tZW50KCkuZW5kT2YoJ2RheScpLFxyXG5cdFx0Y29kZTogJ0NVUlJFTlRfUVVBUlRFUidcclxuXHR9LFxyXG5cdHtcclxuXHRcdHN0YXJ0OiBtb21lbnQoKS5zdGFydE9mKCd5ZWFyJyksXHJcblx0XHRlbmQ6IG1vbWVudCgpLmVuZE9mKCdkYXknKSxcclxuXHRcdGNvZGU6ICdDVVJSRU5UX1lFQVInXHJcblx0fSxcclxuXHR7XHJcblx0XHRzdGFydDogbW9tZW50KCkuc3VidHJhY3QoMSwgJ3cnKS5zdGFydE9mKCdpc29XZWVrJyksXHJcblx0XHRlbmQ6IG1vbWVudCgpLnN1YnRyYWN0KDEsICd3JykuZW5kT2YoJ2lzb1dlZWsnKSxcclxuXHRcdGNvZGU6ICdQQVNUX1dFRUsnXHJcblx0fSxcclxuXHR7XHJcblx0XHRzdGFydDogbW9tZW50KCkuc3VidHJhY3QoMSwgJ00nKS5zdGFydE9mKCdtb250aCcpLFxyXG5cdFx0ZW5kOiBtb21lbnQoKS5zdWJ0cmFjdCgxLCAnTScpLmVuZE9mKCdtb250aCcpLFxyXG5cdFx0Y29kZTogJ1BBU1RfTU9OVEgnXHJcblx0fSxcclxuXHR7XHJcblx0XHRzdGFydDogbW9tZW50KCkuc3VidHJhY3QoMSwgJ3knKS5zdGFydE9mKCd5ZWFyJyksXHJcblx0XHRlbmQ6IG1vbWVudCgpLnN1YnRyYWN0KDEsICd5JykuZW5kT2YoJ3llYXInKSxcclxuXHRcdGNvZGU6ICdQQVNUX1lFQVInXHJcblx0fSxcclxuXHQvKlxyXG5cdHtcclxuXHRcdHN0YXJ0OiBtb21lbnQoKS5zdWJ0cmFjdCgxNSwgJ20nKSxcclxuXHRcdGVuZDogbW9tZW50KCksXHJcblx0XHRjb2RlOiAnTEFTVF8xNV9NSU4nXHJcblx0fSxcclxuXHR7XHJcblx0XHRzdGFydDogbW9tZW50KCkuc3VidHJhY3QoMzAsICdtJyksXHJcblx0XHRlbmQ6IG1vbWVudCgpLFxyXG5cdFx0Y29kZTogJ0xBU1RfMzBfTUlOJ1xyXG5cdH0sXHJcblx0e1xyXG5cdFx0c3RhcnQ6IG1vbWVudCgpLnN1YnRyYWN0KDEsICdoJyksXHJcblx0XHRlbmQ6IG1vbWVudCgpLFxyXG5cdFx0Y29kZTogJ0xBU1RfSE9VUidcclxuXHR9LFxyXG5cdHtcclxuXHRcdHN0YXJ0OiBtb21lbnQoKS5zdWJ0cmFjdCg0LCAnaCcpLFxyXG5cdFx0ZW5kOiBtb21lbnQoKSxcclxuXHRcdGNvZGU6ICdMQVNUXzRfSE9VUlMnXHJcblx0fSxcclxuXHR7XHJcblx0XHRzdGFydDogbW9tZW50KCkuc3VidHJhY3QoMTIsICdoJyksXHJcblx0XHRlbmQ6IG1vbWVudCgpLFxyXG5cdFx0Y29kZTogJ0xBU1RfMTJfSE9VUlMnXHJcblx0fSxcclxuXHR7XHJcblx0XHRzdGFydDogbW9tZW50KCkuc3VidHJhY3QoMSwgJ2QnKSxcclxuXHRcdGVuZDogbW9tZW50KCksXHJcblx0XHRjb2RlOiAnTEFTVF8yNF9IT1VSUydcclxuXHR9LFxyXG5cdCovXHJcblx0e1xyXG5cdFx0c3RhcnQ6IG1vbWVudCgpLnN1YnRyYWN0KDcsICdkJykuc3RhcnRPZignZGF5JyksXHJcblx0XHRlbmQ6IG1vbWVudCgpLmVuZE9mKCdkYXknKSxcclxuXHRcdGNvZGU6ICdMQVNUXzdfREFZUydcclxuXHR9LFxyXG5cdHtcclxuXHRcdHN0YXJ0OiBtb21lbnQoKS5zdWJ0cmFjdCgzMCwgJ2QnKS5zdGFydE9mKCdkYXknKSxcclxuXHRcdGVuZDogbW9tZW50KCkuZW5kT2YoJ2RheScpLFxyXG5cdFx0Y29kZTogJ0xBU1RfMzBfREFZUydcclxuXHR9LFxyXG5cdHtcclxuXHRcdHN0YXJ0OiBtb21lbnQoKS5zdWJ0cmFjdCg2MCwgJ2QnKS5zdGFydE9mKCdkYXknKSxcclxuXHRcdGVuZDogbW9tZW50KCkuZW5kT2YoJ2RheScpLFxyXG5cdFx0Y29kZTogJ0xBU1RfNjBfREFZUydcclxuXHR9LFxyXG5cdHtcclxuXHRcdHN0YXJ0OiBtb21lbnQoKS5zdWJ0cmFjdCgzLCAnTScpLnN0YXJ0T2YoJ2RheScpLFxyXG5cdFx0ZW5kOiBtb21lbnQoKS5lbmRPZignZGF5JyksXHJcblx0XHRjb2RlOiAnTEFTVF9RVUFSVEVSJ1xyXG5cdH0sXHJcblx0e1xyXG5cdFx0c3RhcnQ6IG1vbWVudCgpLnN1YnRyYWN0KDYsICdNJykuc3RhcnRPZignZGF5JyksXHJcblx0XHRlbmQ6IG1vbWVudCgpLmVuZE9mKCdkYXknKSxcclxuXHRcdGNvZGU6ICdMQVNUXzZfTU9OVEhTJ1xyXG5cdH0sXHJcblx0e1xyXG5cdFx0c3RhcnQ6IG1vbWVudCgpLnN1YnRyYWN0KDEsICd5Jykuc3RhcnRPZignZGF5JyksXHJcblx0XHRlbmQ6IG1vbWVudCgpLmVuZE9mKCdkYXknKSxcclxuXHRcdGNvZGU6ICdMQVNUX1lFQVInXHJcblx0fSxcclxuXHR7XHJcblx0XHRzdGFydDogbW9tZW50KCkuc3VidHJhY3QoMiwgJ3knKS5zdGFydE9mKCdkYXknKSxcclxuXHRcdGVuZDogbW9tZW50KCkuZW5kT2YoJ2RheScpLFxyXG5cdFx0Y29kZTogJ0xBU1RfMl9ZRUFSUydcclxuXHR9XHJcbl07XHJcbiJdfQ==