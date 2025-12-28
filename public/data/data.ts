export interface PrayerVerse {
	id: string;
	arabic: string;
	translation: string;
}

export interface PrayerInfo {
	id: string;
	title: string;
	description: string;
	icon: string;
	color: string;
	category: string;
	benefits: string;
	audio?: string;
	versesCount: number;
}

export interface Prayer extends Omit<PrayerInfo, 'versesCount'> {
	verses: PrayerVerse[];
}

export const prayersInfo: PrayerInfo[] = [
	{
		id: 'ziyarat-aminullah',
		title: 'زیارت امین الله',
		description:
			'زیارت معروفه به امین الله که در نهایت اعتبار است و در تمام کتب مزاریه و مصابیح نقل شده است. علامه مجلسی (ره) آن را بهترین زیارات از جهت متن و سند دانسته است.',
		icon: 'mosque',
		color: '#1A5F7A',
		category: 'زیارات',
		benefits:
			'این زیارت از جهت متن و سند در نهایت اعتبار است و در تمامی روضات مقدسه (حرم‌های ائمه) قابل قرائت است.',
		audio: 'https://static.ahlolbait.com/files/ahlolbait/old/download/47/ziyarat_amin_allah.mp3',
		versesCount: 21
	},
	{
		id: 'ziyarat-ashura',
		title: 'زیارت عاشورا',
		description:
			'زیارتنامه‌‌اى از امام باقر علیه السلام برای زیارت امام حسین علیه السلام از دور در روز عاشورا که آن حضرت آن را به علقمة بن محمد حضرمى آموخته است.',
		icon: 'mosque',
		color: '#B22222',
		category: 'Ziyarat',
		benefits:
			'امام صادق‌ علیه السلام فرمود: کسى که حسین علیه السلام را روز عاشورا زیارت کند، بهشت براى او واجب است. همچنین زیارت آن روز، مانند به خون خویش غلتیدن پیش روى آن حضرت‌ به شمار آمده است.',
		audio: 'https://static.ahlolbait.com/files/ahlolbait/old/u12/download/ashoura-farahmand.mp3',
		versesCount: 46
	},
	{
		id: 'umm-davud-prayer',
		title: 'عمل و دعای ام داود (مفاتیح الجنان)',
		description:
			'عمل ام داود كه عمده اعمال روز نیمه رجب است و براى برآمدن حاجات و كشف كربات و دفع ظلم ظالمان مؤثر است.',
		icon: 'hands-pray',
		color: '#1A5F7A',
		category: 'اعمال مخصوصه ماه رجب',
		benefits: 'براى برآمدن حاجات و كشف كربات و دفع ظلم ظالمان مؤثر است.',
		audio: 'https://static.ahlolbait.com/files/ahlolbait/old/download/47/amal_va_doaye_om_davod.mp3',
		versesCount: 37
	},
	{
		id: 'dua-kumayl',
		title: 'دعای کمیل',
		description: 'دعاى خضر عليه السلام که حضرت امير المؤمنين عليه السلام آن را به كميل بن زياد تعليم فرمود.',
		icon: 'hands-pray',
		color: '#1A237E',
		category: 'ادعیه و زیارات',
		benefits: 'براى كفايت از شر اعدا و فتح باب رزق و آمرزش گناهان نافع است.',
		audio: 'https://static.ahlolbait.com/files/ahlolbait/old/download/doa_komeil.mp3',
		versesCount: 133
	},
	{
		id: 'dua-tawassul',
		title: 'دعای توسّل',
		description:
			'دعای توسّل که برای طلب هر حاجت و شفاعت از ائمه معصومین (ع) خوانده می‌شود و از دعاهاى مشهور و معتبرى است که در کتب ادعیه نقل شده است.',
		icon: 'hands-pray',
		color: '#1A5F7A',
		category: 'Hajat',
		benefits:
			'علاّمه مجلسى (ره) از محمّد بن بابويه نقل کرده است که این دعا را در هیچ امری نخواندم مگر آنکه اثر اجابت را به زودی یافتم.',
		audio: 'https://static.ahlolbait.com/files/ahlolbait/old/download/doa_tavassol_farahmand.mp3',
		versesCount: 16
	},
	{
		id: 'ziyarat-jamiah-kabirah',
		title: 'زیارت جامعه کبیره',
		description:
			'یکی از کامل‌ترین زیارات از نظر متن و سند که از امام هادی (ع) روایت شده و دربردارنده مقامات امامان معصوم است.',
		icon: 'mosque',
		color: '#1A237E',
		category: 'Ziyarat',
		benefits: 'معرفت افزایی نسبت به مقام اهل بیت، استجابت دعا، و شفاعت معصومین.',
		audio: 'https://static.ahlolbait.com/files/ahlolbait/old/download/47/ziyarat_jameh_kabireh.mp3',
		versesCount: 71
	}
];
