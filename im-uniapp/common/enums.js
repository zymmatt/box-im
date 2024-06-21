
const MESSAGE_TYPE = {
	TEXT: 0,
	IMAGE: 1,
	FILE:2,
	AUDIO:3,
	VIDEO:4,
	RECALL:10,
	READED:11,
	RECEIPT:12,
	TIP_TIME:20,
	TIP_TEXT:21,
	LOADING:30,
	ACT_RT_VOICE:40,
	ACT_RT_VIDEO:41,
	RTC_CALL_VOICE: 100,
	RTC_CALL_VIDEO: 101,
	RTC_ACCEPT: 102,
	RTC_REJECT: 103,
	RTC_CANCEL: 104,
	RTC_FAILED: 105,
	RTC_HANDUP: 106,
	RTC_CANDIDATE: 107,
	RTC_GROUP_SETUP:200,
	RTC_GROUP_ACCEPT:201,
    RTC_GROUP_REJECT:202,
    RTC_GROUP_FAILED:203,
    RTC_GROUP_CANCEL:204,
    RTC_GROUP_QUIT:205,
    RTC_GROUP_INVITE:206,
    RTC_GROUP_JOIN:207,
    RTC_GROUP_OFFER:208,
    RTC_GROUP_ANSWER:209,
    RTC_GROUP_CANDIDATE:210,
    RTC_GROUP_DEVICE:211
}

const USER_STATE = {
	OFFLINE: 0,
	FREE: 1,
	BUSY: 2
}

const TERMINAL_TYPE = {
	WEB: 0,
	APP: 1
}

const MESSAGE_STATUS = {
	UNSEND: 0,
	SENDED: 1,
	RECALL:2,
	READED:3
}

export {
	MESSAGE_TYPE,
	USER_STATE,
	TERMINAL_TYPE,
	MESSAGE_STATUS
}
