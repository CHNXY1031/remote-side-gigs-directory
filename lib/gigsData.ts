export const SITE_URL = 'https://remote-side-gigs-directory.vercel.app';

export const GIG_CATEGORIES = [
  { id: 'ai-data-annotation', label: 'AI Data & Model Training', shortLabel: 'AI Training', description: 'Annotation, model evaluation, search relevance and expert AI feedback.' },
  { id: 'user-testing', label: 'Software & Website Testing', shortLabel: 'Testing', description: 'Usability studies, QA, bug hunting and playtesting.' },
  { id: 'freelance-platforms', label: 'Freelance Marketplaces', shortLabel: 'Freelance', description: 'Project marketplaces and curated independent talent networks.' },
  { id: 'online-tutoring', label: 'Online Language & Tutoring', shortLabel: 'Tutoring', description: 'Language conversation, academic support and cohort teaching.' },
  { id: 'writing-translation', label: 'Writing & Translation', shortLabel: 'Writing', description: 'Content, editing, localization and specialist translation work.' },
  { id: 'microtasks-research', label: 'Microtasks & Research', shortLabel: 'Research', description: 'Paid studies, interviews, surveys and flexible field tasks.' },
] as const;

export type GigCategoryId = (typeof GIG_CATEGORIES)[number]['id'];
export type ExperienceLevel = 'Beginner' | 'Advanced';

export interface GigPlatform {
  id: string;
  name: string;
  description: string;
  category: GigCategoryId;
  payRate: string;
  rateMin: number;
  rateMax: number;
  payoutMethods: string[];
  level: ExperienceLevel;
  applyUrl: string;
  tags: string[];
  verified: true;
}

type Seed = [
  name: string,
  focus: string,
  payRate: string,
  rateMin: number,
  rateMax: number,
  payout: string,
  level: ExperienceLevel,
  url: string,
  tags: string,
];

const slugify = (value: string) => value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
const applyLink = (url: string) => `${url}${url.includes('?') ? '&' : '?'}ref=remote-side-gigs-directory`;

const build = (category: GigCategoryId, rows: Seed[]): GigPlatform[] => rows.map((row) => ({
  id: `${category}-${slugify(row[0])}`,
  name: row[0],
  description: row[1],
  category,
  payRate: row[2],
  rateMin: row[3],
  rateMax: row[4],
  payoutMethods: row[5].split('|'),
  level: row[6],
  applyUrl: applyLink(row[7]),
  tags: row[8].split('|'),
  verified: true,
}));

const aiData = build('ai-data-annotation', [
  ['DataAnnotation', 'Evaluate model responses and complete writing, coding and reasoning projects for AI teams.', '$20–$40/hr', 20, 40, 'PayPal', 'Beginner', 'https://www.dataannotation.tech/', 'ai-model-training|writing|coding'],
  ['Remotasks', 'Complete image, text and generative-AI annotation projects with task-based scheduling.', '$10–$25/hr', 10, 25, 'PayPal|AirTM', 'Beginner', 'https://www.remotasks.com/', 'data-annotation|computer-vision'],
  ['Outlier', 'Contribute subject-matter expertise to improve and evaluate advanced generative AI models.', '$15–$50/hr', 15, 50, 'PayPal|AirTM', 'Advanced', 'https://outlier.ai/experts', 'ai-model-training|expert-review'],
  ['Appen CrowdGen', 'Join global data collection, search evaluation and language annotation projects.', '$8–$25/hr', 8, 25, 'Payoneer|Direct Deposit', 'Beginner', 'https://crowdgen.com/', 'search-evaluation|data-collection'],
  ['TELUS Digital AI Community', 'Work on search quality, maps, ads and AI data projects in local markets.', '$12–$30/hr', 12, 30, 'Direct Deposit', 'Beginner', 'https://careers.telusdigital.com/search/artificial-intelligence/jobs', 'search-evaluation|maps'],
  ['OneForma', 'Access multilingual data collection, transcription, judging and annotation assignments.', '$8–$30/hr', 8, 30, 'PayPal|Payoneer', 'Beginner', 'https://www.oneforma.com/jobs/', 'data-annotation|transcription'],
  ['Toloka Annotators', 'Complete flexible data-labeling and AI quality tasks from a global contributor pool.', '$5–$20/hr', 5, 20, 'Payoneer|PayPal', 'Beginner', 'https://toloka.ai/tolokers/', 'microtasks|data-annotation'],
  ['Clickworker AI', 'Handle UHRS, text creation, categorization and AI-training microprojects.', '$5–$18/hr', 5, 18, 'PayPal|Payoneer', 'Beginner', 'https://www.clickworker.com/clickworker/', 'microtasks|search-evaluation'],
  ['Welocalize', 'Support global search, ads, localization and AI data quality programs.', '$12–$30/hr', 12, 30, 'PayPal|Direct Deposit', 'Advanced', 'https://jobs.lever.co/welocalize', 'search-evaluation|localization'],
  ['RWS TrainAI', 'Provide language, speech, search and model-evaluation data for responsible AI.', '$10–$35/hr', 10, 35, 'PayPal|Direct Deposit', 'Advanced', 'https://www.rws.com/artificial-intelligence/train-ai-community/', 'ai-model-training|language'],
  ['LXT', 'Collect and annotate speech, image and text data across many languages.', '$8–$25/hr', 8, 25, 'PayPal|Direct Deposit', 'Beginner', 'https://www.lxt.ai/careers/', 'speech-data|data-collection'],
  ['Neevo', 'Complete voice recording, text validation and data enrichment tasks on demand.', '$5–$20/hr', 5, 20, 'PayPal', 'Beginner', 'https://www.neevo.ai/', 'speech-data|microtasks'],
  ['Hive Micro', 'Label images and other machine-learning data through short online tasks.', '$3–$12/hr', 3, 12, 'PayPal|Bitcoin', 'Beginner', 'https://hivemicro.com/', 'computer-vision|microtasks'],
  ['DataForce by TransPerfect', 'Join global speech, photo, language and AI data collection studies.', '$10–$30/hr', 10, 30, 'PayPal|Direct Deposit', 'Beginner', 'https://dataforcecommunity.transperfect.com/', 'data-collection|speech-data'],
  ['CloudFactory', 'Deliver managed data labeling and document-processing work in distributed teams.', '$6–$20/hr', 6, 20, 'Direct Deposit', 'Beginner', 'https://www.cloudfactory.com/careers', 'data-annotation|document-processing'],
  ['Sama', 'Support ethically sourced image and video annotation for computer-vision systems.', '$6–$18/hr', 6, 18, 'Direct Deposit', 'Beginner', 'https://www.sama.com/careers', 'computer-vision|data-annotation'],
  ['Invisible Technologies', 'Work on structured operations and expert data workflows that power AI systems.', '$15–$40/hr', 15, 40, 'Direct Deposit', 'Advanced', 'https://www.invisible.co/careers', 'ai-operations|expert-review'],
  ['Mindrift', 'Use professional expertise to create, evaluate and refine domain-specific AI outputs.', '$15–$45/hr', 15, 45, 'PayPal|Payoneer', 'Advanced', 'https://mindrift.ai/vacancies', 'ai-model-training|expert-review'],
  ['Alignerr', 'Train AI in specialist fields through high-skill evaluation and content creation.', '$20–$60/hr', 20, 60, 'PayPal|Direct Deposit', 'Advanced', 'https://www.alignerr.com/', 'ai-model-training|expert-review'],
  ['iMerit', 'Join data annotation teams working on computer vision, geospatial and generative AI.', '$8–$25/hr', 8, 25, 'Direct Deposit', 'Advanced', 'https://imerit.net/careers/', 'computer-vision|geospatial'],
  ['Mercor', 'Match with expert contract roles including model training, coding and research evaluation.', '$20–$100/hr', 20, 100, 'Stripe|Direct Deposit', 'Advanced', 'https://work.mercor.com/', 'expert-review|coding'],
  ['e2f', 'Contribute multilingual speech, search relevance and linguistic data to AI programs.', '$10–$30/hr', 10, 30, 'PayPal|Direct Deposit', 'Advanced', 'https://e2f.com/jobs/', 'language|search-evaluation'],
]);

const testing = build('user-testing', [
  ['UserTesting', 'Record your experience with websites, apps and prototypes for product teams.', '$10–$60/test', 10, 60, 'PayPal', 'Beginner', 'https://www.usertesting.com/get-paid-to-test', 'website-testing|app-testing'],
  ['Testbirds', 'Find crowdtesting projects covering usability, bugs, devices and digital products.', '$10–$60/test', 10, 60, 'PayPal|Direct Deposit', 'Beginner', 'https://nest.testbirds.com/home/tester', 'qa-testing|app-testing'],
  ['Trymata', 'Think aloud while completing guided usability tasks on sites and mobile apps.', '$10–$30/test', 10, 30, 'PayPal', 'Beginner', 'https://trymata.com/learn/tester-signup/', 'website-testing|usability'],
  ['Userlytics', 'Join remote moderated and unmoderated UX studies with global brands.', '$5–$90/test', 5, 90, 'PayPal', 'Beginner', 'https://www.userlytics.com/tester-signup', 'usability|market-research-interviews'],
  ['uTest', 'Test software, report bugs and build a reputation in a global QA community.', '$5–$100/project', 5, 100, 'PayPal|Payoneer', 'Advanced', 'https://www.utest.com/signup/personal', 'qa-testing|bug-testing'],
  ['UserFeel', 'Evaluate websites in your own language through recorded usability sessions.', '$10–$30/test', 10, 30, 'PayPal', 'Beginner', 'https://www.userfeel.com/tester-registration', 'website-testing|usability'],
  ['Userbrain', 'Complete short weekly website tests and record clear spoken feedback.', '$5–$20/test', 5, 20, 'PayPal', 'Beginner', 'https://tester.userbrain.com/', 'website-testing|usability'],
  ['TestingTime', 'Take part in remote interviews, usability sessions and occasional in-person studies.', '$25–$80/study', 25, 80, 'PayPal|Direct Deposit', 'Beginner', 'https://www.testingtime.com/en/become-a-paid-testuser/', 'market-research-interviews|usability'],
  ['PlaytestCloud', 'Play unreleased mobile games and narrate your player experience.', '$9–$36/test', 9, 36, 'PayPal', 'Beginner', 'https://www.playtestcloud.com/signup', 'game-testing|mobile'],
  ['BetaTesting', 'Test beta apps, hardware and services through structured research projects.', '$10–$75/test', 10, 75, 'PayPal', 'Beginner', 'https://betatesting.com/beta-testers', 'app-testing|product-testing'],
  ['Test IO', 'Find bugs in real apps and websites and earn per accepted issue.', '$5–$50/bug', 5, 50, 'PayPal|Payoneer', 'Advanced', 'https://join.test.io/', 'qa-testing|bug-testing'],
  ['Testlio', 'Join a vetted freelance testing network for ongoing managed QA projects.', '$15–$35/hr', 15, 35, 'PayPal|Payoneer', 'Advanced', 'https://testlio.com/for-testers/', 'qa-testing|app-testing'],
  ['Ferpection', 'Share contextual feedback through mobile missions and digital experience studies.', '$10–$50/study', 10, 50, 'PayPal|Gift Card', 'Beginner', 'https://ferpection.com/en/become-a-tester/', 'usability|mobile'],
  ['IntelliZoom', 'Provide think-aloud and survey feedback within the UserTesting participant network.', '$5–$60/study', 5, 60, 'PayPal', 'Beginner', 'https://www.intellizoom.com/panel', 'website-testing|usability'],
  ['Conversion Crimes', 'Audit landing pages and funnels while explaining conversion blockers on video.', '$10–$40/test', 10, 40, 'PayPal', 'Advanced', 'https://conversioncrimes.com/become-a-tester/', 'website-testing|conversion'],
  ['PlaybookUX', 'Participate in unmoderated tests, card sorts and live product interviews.', '$10–$90/study', 10, 90, 'PayPal', 'Beginner', 'https://www.playbookux.com/tester/', 'usability|market-research-interviews'],
  ['PingPong', 'Join live remote research interviews with product teams around the world.', '$20–$100/study', 20, 100, 'PayPal|Wise', 'Beginner', 'https://www.hellopingpong.com/become-a-tester', 'market-research-interviews|usability'],
  ['UserCrowd', 'Complete quick design preference tests and short UX research surveys.', '$3–$15/hr', 3, 15, 'PayPal', 'Beginner', 'https://www.usercrowd.com/', 'usability|online-surveys'],
  ['Beta Family', 'Test iOS and Android apps and provide actionable written reports.', '$5–$50/test', 5, 50, 'PayPal', 'Beginner', 'https://betafamily.com/testers/', 'app-testing|mobile'],
  ['Tester Work', 'Run guided test cases and bug hunts for apps on your own devices.', '$5–$60/cycle', 5, 60, 'PayPal|Payoneer', 'Advanced', 'https://testerwork.com/tester-community/', 'qa-testing|app-testing'],
  ['Global App Testing', 'Join exploratory app-testing cycles across devices, languages and locations.', '$8–$50/cycle', 8, 50, 'PayPal|Payoneer', 'Advanced', 'https://www.globalapptesting.com/tester-sign-up', 'app-testing|qa-testing'],
  ['Testapic', 'Test French and international digital experiences through recorded user journeys.', '$7–$50/test', 7, 50, 'PayPal', 'Beginner', 'https://www.testapic.com/tester/', 'website-testing|usability'],
]);

const freelance = build('freelance-platforms', [
  ['Upwork', 'Bid on hourly and fixed-price projects across technology, creative and business services.', '$15–$100+/hr', 15, 100, 'PayPal|Payoneer|Direct Deposit', 'Beginner', 'https://www.upwork.com/nx/signup/', 'freelance-marketing|freelance-developers|virtual-assistant-jobs'],
  ['Fiverr', 'Package skills as fixed-price services for buyers in a global marketplace.', '$5–$500+/project', 5, 100, 'PayPal|Payoneer|Direct Deposit', 'Beginner', 'https://www.fiverr.com/start_selling', 'freelance-creative-work|freelance-marketing'],
  ['Toptal', 'Join a highly selective network for senior software, design, finance and product work.', '$60–$200+/hr', 60, 200, 'PayPal|Payoneer|Direct Deposit', 'Advanced', 'https://www.toptal.com/talent/apply', 'freelance-developers|freelance-designers'],
  ['Contra', 'Create a portfolio and land commission-free independent contracts with modern teams.', '$25–$150+/hr', 25, 150, 'Stripe|Direct Deposit', 'Beginner', 'https://contra.com/sign-up', 'freelance-creative-work|freelance-marketing'],
  ['Freelancer.com', 'Compete for projects and contests spanning thousands of freelance skill categories.', '$10–$80/hr', 10, 80, 'PayPal|Payoneer|Direct Deposit', 'Beginner', 'https://www.freelancer.com/signup', 'freelance-developers|freelance-designers'],
  ['PeoplePerHour', 'Send proposals or sell packaged offers to businesses seeking independent talent.', '$15–$80/hr', 15, 80, 'PayPal|Payoneer|Direct Deposit', 'Beginner', 'https://www.peopleperhour.com/site/register', 'freelance-marketing|freelance-creative-work'],
  ['Guru', 'Quote on flexible projects and manage milestones through a secure workroom.', '$15–$100/hr', 15, 100, 'PayPal|Direct Deposit', 'Beginner', 'https://www.guru.com/registeraccount.aspx', 'freelance-developers|virtual-assistant-jobs'],
  ['Workana', 'Find remote projects with strong coverage across Latin America and global markets.', '$10–$60/hr', 10, 60, 'PayPal|Payoneer', 'Beginner', 'https://www.workana.com/signup', 'freelance-marketing|virtual-assistant-jobs'],
  ['Malt', 'Connect with European companies seeking verified freelance consultants and specialists.', '$30–$150/hr', 30, 150, 'Direct Deposit', 'Advanced', 'https://www.malt.com/register', 'freelance-developers|freelance-marketing'],
  ['99designs', 'Win design contests or work directly with clients on curated creative briefs.', '$150–$2,000/project', 25, 120, 'PayPal|Payoneer', 'Advanced', 'https://99designs.com/signup', 'freelance-designers|freelance-creative-work'],
  ['DesignCrowd', 'Submit concepts to design contests and build repeat client relationships.', '$50–$1,000/project', 15, 90, 'PayPal|Payoneer', 'Beginner', 'https://www.designcrowd.com/signup', 'freelance-designers|freelance-creative-work'],
  ['Arc', 'Match with vetted remote developer roles and freelance software projects.', '$50–$150/hr', 50, 150, 'PayPal|Direct Deposit', 'Advanced', 'https://arc.dev/developer-signup', 'freelance-developers|coding'],
  ['Gun.io', 'Join a screened engineering network for flexible contracts with established companies.', '$75–$200/hr', 75, 200, 'Direct Deposit', 'Advanced', 'https://gun.io/talent/', 'freelance-developers|coding'],
  ['Lemon.io', 'Get matched to startup development projects after technical and communication screening.', '$40–$100/hr', 40, 100, 'PayPal|Payoneer', 'Advanced', 'https://lemon.io/for-developers/', 'freelance-developers|coding'],
  ['Braintrust', 'Access client work through a talent-owned network with transparent fees.', '$40–$150/hr', 40, 150, 'Direct Deposit|Crypto', 'Advanced', 'https://app.usebraintrust.com/auth/signup/', 'freelance-developers|freelance-designers'],
  ['A.Team', 'Form product squads with vetted builders for ambitious company initiatives.', '$80–$200/hr', 80, 200, 'Direct Deposit', 'Advanced', 'https://www.a.team/join', 'freelance-developers|freelance-designers'],
  ['Codeable', 'Deliver carefully scoped WordPress projects through a vetted expert marketplace.', '$80–$120/hr', 80, 120, 'PayPal|Direct Deposit', 'Advanced', 'https://www.codeable.io/apply/', 'freelance-developers|wordpress'],
  ['Kolabtree', 'Offer scientific, statistical and academic consulting to organizations worldwide.', '$30–$150/hr', 30, 150, 'PayPal|Direct Deposit', 'Advanced', 'https://www.kolabtree.com/join-as-expert', 'expert-review|research'],
  ['Catalant', 'Take on strategy, operations and transformation projects as an independent consultant.', '$75–$300/hr', 75, 300, 'Direct Deposit', 'Advanced', 'https://gocatalant.com/expert-marketplace/', 'consulting|freelance-marketing'],
  ['Flexing It', 'Find screened consulting and project work across India and international markets.', '$25–$150/hr', 25, 150, 'Direct Deposit', 'Advanced', 'https://www.flexingit.com/consultant', 'consulting|freelance-marketing'],
  ['MarketerHire', 'Match with growth, content and performance marketing contracts after vetting.', '$50–$150/hr', 50, 150, 'Direct Deposit', 'Advanced', 'https://marketerhire.com/marketers', 'freelance-marketing|consulting'],
  ['Mayple', 'Work with e-commerce and SaaS brands as a vetted marketing specialist.', '$40–$125/hr', 40, 125, 'PayPal|Direct Deposit', 'Advanced', 'https://www.mayple.com/become-a-maypler', 'freelance-marketing|consulting'],
]);

const tutoring = build('online-tutoring', [
  ['Preply', 'Set your own rate and teach languages or specialist subjects to global learners.', '$15–$35/hr', 15, 35, 'PayPal|Wise|Payoneer', 'Beginner', 'https://preply.com/en/teach', 'language-teaching|english-tutoring'],
  ['Cambly', 'Hold conversational English sessions with adults and children on a flexible schedule.', '$10–$12/hr', 10, 12, 'PayPal', 'Beginner', 'https://www.cambly.com/english/tutors', 'english-tutoring|language-teaching'],
  ['italki', 'Offer professional or community language lessons and manage your own calendar.', '$10–$40/hr', 10, 40, 'PayPal|Payoneer', 'Beginner', 'https://teach.italki.com/', 'language-teaching|english-tutoring'],
  ['VIPKid', 'Teach structured online English lessons to young learners where hiring is available.', '$14–$22/hr', 14, 22, 'Direct Deposit', 'Advanced', 'https://www.vipkid.com/teach', 'english-tutoring|kids'],
  ['AmazingTalker', 'Create personalized language and subject lessons for an international student base.', '$15–$40/hr', 15, 40, 'PayPal|Payoneer', 'Beginner', 'https://en.amazingtalker.com/teach', 'language-teaching|academic-tutoring'],
  ['Outschool', 'Design small-group classes for children across academic and creative topics.', '$20–$70/hr', 20, 70, 'PayPal', 'Advanced', 'https://teach.outschool.com/', 'course-creation|kids'],
  ['Wyzant', 'Tutor US students online across academic, test-prep and professional subjects.', '$20–$80/hr', 20, 80, 'Direct Deposit', 'Advanced', 'https://www.wyzant.com/tutorsignupstart', 'academic-tutoring|test-prep'],
  ['Tutor.com', 'Provide scheduled and on-demand academic tutoring through an established classroom.', '$12–$30/hr', 12, 30, 'Direct Deposit', 'Advanced', 'https://www.tutor.com/apply', 'academic-tutoring|test-prep'],
  ['Varsity Tutors', 'Teach one-to-one and group sessions across school, university and test-prep topics.', '$15–$40/hr', 15, 40, 'Direct Deposit', 'Advanced', 'https://www.varsitytutors.com/tutoring-jobs', 'academic-tutoring|test-prep'],
  ['Skooli', 'Tutor K–12 and college students in a virtual classroom with credential-based screening.', '$20–$40/hr', 20, 40, 'PayPal', 'Advanced', 'https://www.skooli.com/for-tutors', 'academic-tutoring|kids'],
  ['Superprof', 'Publish a teaching profile and offer lessons in academic, language and creative skills.', '$15–$60/hr', 15, 60, 'PayPal|Direct Deposit', 'Beginner', 'https://www.superprof.com/tutor/', 'academic-tutoring|language-teaching'],
  ['Classgap', 'Teach languages and academic subjects using an integrated online classroom.', '$10–$35/hr', 10, 35, 'PayPal|Direct Deposit', 'Beginner', 'https://www.classgap.com/en/become-an-online-tutor', 'language-teaching|academic-tutoring'],
  ['Lingoda', 'Lead structured online language classes using supplied curriculum materials.', '$12–$30/hr', 12, 30, 'PayPal', 'Advanced', 'https://www.lingoda.com/en/become-a-teacher/', 'language-teaching|english-tutoring'],
  ['Verbling', 'Build a profile and teach live language lessons through an online classroom.', '$12–$40/hr', 12, 40, 'PayPal|Payoneer', 'Advanced', 'https://www.verbling.com/teach', 'language-teaching|english-tutoring'],
  ['LiveXP', 'Offer language and subject tutoring with flexible availability and profile pricing.', '$8–$30/hr', 8, 30, 'PayPal|Payoneer', 'Beginner', 'https://livexp.com/teach', 'language-teaching|english-tutoring'],
  ['Native Camp', 'Teach short on-demand English conversation lessons without fixed bookings.', '$8–$20/hr', 8, 20, 'Payoneer', 'Beginner', 'https://nativecamp.net/tutors', 'english-tutoring|language-teaching'],
  ['Engoo', 'Deliver one-to-one English lessons using prepared materials and flexible shifts.', '$10–$20/hr', 10, 20, 'PayPal|Payoneer', 'Beginner', 'https://engoo.com/app/teach', 'english-tutoring|language-teaching'],
  ['Cafetalk', 'Teach languages, music, art and lifestyle skills to learners in global time zones.', '$10–$40/hr', 10, 40, 'PayPal|Payoneer', 'Beginner', 'https://cafetalk.com/tutor/page/', 'language-teaching|course-creation'],
  ['Studypool', 'Answer student questions and provide written academic tutoring on demand.', '$10–$50/hr', 10, 50, 'PayPal|Payoneer', 'Advanced', 'https://www.studypool.com/tutors', 'academic-tutoring|homework-help'],
  ['TutorOcean', 'Set rates, schedule live lessons and sell tutoring packages through your profile.', '$15–$50/hr', 15, 50, 'Stripe|PayPal', 'Beginner', 'https://www.tutorocean.com/become-a-tutor', 'academic-tutoring|language-teaching'],
  ['LatinHire', 'Teach languages and academic subjects to Latin American learners through partner schools.', '$10–$25/hr', 10, 25, 'PayPal|Direct Deposit', 'Advanced', 'https://www.latinhire.com/online-tutoring-jobs/', 'academic-tutoring|english-tutoring'],
  ['Learnlight', 'Coach business professionals in languages and communication through virtual programs.', '$15–$30/hr', 15, 30, 'Direct Deposit', 'Advanced', 'https://careers.learnlight.com/', 'language-teaching|business-english'],
]);

const writing = build('writing-translation', [
  ['Contently', 'Showcase editorial work and be discovered for premium brand storytelling projects.', '$0.25–$1+/word', 30, 120, 'PayPal|Direct Deposit', 'Advanced', 'https://contently.com/register', 'freelance-writing|content-marketing'],
  ['Textbroker', 'Claim rated content assignments and build earnings through consistent writing quality.', '$0.01–$0.05/word', 8, 25, 'PayPal', 'Beginner', 'https://www.textbroker.com/authors', 'freelance-writing|beginner-writing'],
  ['ClearVoice', 'Join a curated talent network for brand content, copy and editorial projects.', '$0.10–$1/word', 25, 100, 'PayPal', 'Advanced', 'https://www.clearvoice.com/talent-network/', 'freelance-writing|content-marketing'],
  ['ProBlogger Jobs', 'Apply directly to blogging, copywriting and content strategy opportunities.', '$0.08–$0.50/word', 20, 80, 'PayPal|Direct Deposit', 'Beginner', 'https://problogger.com/jobs/', 'freelance-writing|content-marketing'],
  ['nDash', 'Pitch content ideas and work directly with companies seeking specialist writers.', '$150–$500/article', 30, 100, 'Stripe', 'Advanced', 'https://www.ndash.com/writers', 'freelance-writing|content-marketing'],
  ['Compose.ly', 'Join a managed writing network with recurring content projects and editorial support.', '$0.10–$0.50/word', 20, 70, 'PayPal', 'Advanced', 'https://compose.ly/become-a-writer', 'freelance-writing|content-marketing'],
  ['Crowd Content', 'Choose marketplace writing and editing orders matched to your quality level.', '$0.03–$0.14/word', 10, 35, 'PayPal', 'Beginner', 'https://www.crowdcontent.com/writer-signup/', 'freelance-writing|editing-proofreading'],
  ['WriterAccess', 'Access content assignments and brand clients through a screened creative marketplace.', '$0.03–$0.20/word', 12, 50, 'PayPal', 'Advanced', 'https://www.writeraccess.com/apply/', 'freelance-writing|content-marketing'],
  ['Verblio', 'Write blog and marketing drafts for customers and get paid for accepted work.', '$10–$100/article', 10, 40, 'PayPal', 'Beginner', 'https://www.verblio.com/become-a-writer', 'freelance-writing|beginner-writing'],
  ['Constant Content', 'Sell prewritten articles or accept custom content requests from businesses.', '$20–$200/article', 15, 60, 'PayPal', 'Advanced', 'https://www.constant-content.com/area/registerauthor.htm', 'freelance-writing|content-marketplace'],
  ['Scripted', 'Connect with companies for specialist blogs, web copy and ongoing content programs.', '$0.08–$0.30/word', 20, 70, 'PayPal', 'Advanced', 'https://www.scripted.com/writers', 'freelance-writing|content-marketing'],
  ['Reedsy', 'Offer editing, ghostwriting and publishing services to independent authors.', '$30–$100/hr', 30, 100, 'Stripe', 'Advanced', 'https://reedsy.com/join-our-community', 'editing-proofreading|freelance-writing'],
  ['JournalismJobs.com', 'Browse reporting, editing and digital-media openings from established publishers.', '$20–$75/hr', 20, 75, 'Direct Deposit', 'Advanced', 'https://www.journalismjobs.com/', 'freelance-writing|journalism'],
  ['Mediabistro', 'Find media, editorial, communications and content roles with recognized organizations.', '$20–$80/hr', 20, 80, 'Direct Deposit', 'Advanced', 'https://www.mediabistro.com/jobs/', 'freelance-writing|journalism'],
  ['FreelanceWriting.com', 'Browse curated writing calls, contests and remote editorial assignments.', '$15–$75/hr', 15, 75, 'PayPal|Direct Deposit', 'Beginner', 'https://www.freelancewriting.com/jobs/', 'freelance-writing|beginner-writing'],
  ['ProZ.com', 'Build a language-professional profile and quote on translation and interpreting jobs.', '$0.08–$0.30/word', 20, 80, 'PayPal|Wise|Direct Deposit', 'Advanced', 'https://www.proz.com/register', 'translation-jobs|localization'],
  ['TranslatorsCafe', 'Find translation agency postings and network with language professionals worldwide.', '$0.05–$0.20/word', 15, 60, 'PayPal|Wise|Direct Deposit', 'Advanced', 'https://www.translatorscafe.com/cafe/register.asp', 'translation-jobs|localization'],
  ['Smartcat', 'Use an integrated translation workspace and marketplace to connect with buyers.', '$0.05–$0.25/word', 15, 70, 'PayPal|Payoneer|Direct Deposit', 'Advanced', 'https://www.smartcat.com/marketplace/', 'translation-jobs|localization'],
  ['Gengo', 'Pass language tests and claim bite-sized translation jobs from a shared queue.', '$0.03–$0.12/word', 10, 35, 'PayPal|Payoneer', 'Beginner', 'https://gengo.com/translators/', 'translation-jobs|beginner-translation'],
  ['Unbabel', 'Edit AI-assisted translations for customer-service and business communication.', '$8–$30/hr', 8, 30, 'PayPal|Payoneer', 'Advanced', 'https://unbabel.com/humans/', 'translation-jobs|ai-editing'],
  ['TextMaster', 'Complete professional translation and copywriting assignments for international brands.', '$0.04–$0.20/word', 15, 60, 'PayPal|Payoneer', 'Advanced', 'https://www.textmaster.com/translator-writer/', 'translation-jobs|freelance-writing'],
  ['BLEND', 'Join localization projects spanning translation, voice, cultural adaptation and AI data.', '$15–$60/hr', 15, 60, 'PayPal|Payoneer|Direct Deposit', 'Advanced', 'https://www.getblend.com/careers/freelancers/', 'translation-jobs|localization'],
]);

const microtasks = build('microtasks-research', [
  ['Prolific', 'Take part in ethically paid academic and product research with transparent rewards.', '$8–$20/hr', 8, 20, 'PayPal', 'Beginner', 'https://www.prolific.com/participants', 'paid-research|online-surveys'],
  ['Amazon Mechanical Turk', 'Complete human-intelligence tasks such as categorization, surveys and validation.', '$3–$20/hr', 3, 20, 'Amazon Payments|Direct Deposit', 'Beginner', 'https://worker.mturk.com/', 'microtasks|online-surveys'],
  ['CloudResearch Connect', 'Participate in verified university and company research through a study marketplace.', '$7–$20/hr', 7, 20, 'PayPal|Direct Deposit', 'Beginner', 'https://connect.cloudresearch.com/participant/', 'paid-research|online-surveys'],
  ['User Interviews', 'Apply to consumer and professional interviews, focus groups and product studies.', '$30–$150/study', 30, 150, 'PayPal|Gift Card', 'Beginner', 'https://www.userinterviews.com/hello', 'paid-research|market-research-interviews'],
  ['Respondent', 'Match with higher-paying professional research interviews based on your expertise.', '$50–$250/study', 50, 250, 'PayPal', 'Advanced', 'https://app.respondent.io/respondents/v2/signup', 'paid-research|market-research-interviews'],
  ['dscout', 'Complete diary missions, usability tasks and live interviews for product researchers.', '$10–$200/study', 10, 200, 'PayPal', 'Beginner', 'https://www.dscout.com/participate-in-research-studies', 'paid-research|market-research-interviews'],
  ['Sago', 'Join consumer panels, focus groups and interviews online or in selected cities.', '$25–$200/study', 25, 200, 'PayPal|Gift Card', 'Beginner', 'https://sago.com/en/get-in-touch/join-our-panel/', 'paid-research|market-research-interviews'],
  ['FocusGroup.com', 'Apply for online surveys, webcam interviews and multi-day research communities.', '$10–$200/study', 10, 200, 'PayPal|Gift Card', 'Beginner', 'https://www.focusgroup.com/', 'paid-research|market-research-interviews'],
  ['L&E Opinions', 'Participate in focus groups and consumer studies through regional research facilities.', '$25–$250/study', 25, 250, 'PayPal|Gift Card', 'Beginner', 'https://www.leopinions.com/', 'paid-research|market-research-interviews'],
  ['Rare Patient Voice', 'Share patient or caregiver experience in compensated healthcare research studies.', '$100–$120/hr', 100, 120, 'PayPal|Check', 'Advanced', 'https://rarepatientvoice.com/patients-caregivers/', 'paid-research|healthcare-research'],
  ['Mindswarms', 'Answer video research questions for brands through short self-recorded studies.', '$10–$50/study', 10, 50, 'PayPal', 'Beginner', 'https://mindswarms.com/participants/', 'paid-research|video-surveys'],
  ['YouGov', 'Earn points by contributing opinions to public-affairs and consumer research.', '$2–$10/hr', 2, 10, 'PayPal|Gift Card', 'Beginner', 'https://account.yougov.com/', 'online-surveys|paid-research'],
  ['Ipsos iSay', 'Complete global market-research surveys and redeem points for cash or rewards.', '$2–$8/hr', 2, 8, 'PayPal|Gift Card', 'Beginner', 'https://www.ipsosisay.com/', 'online-surveys|paid-research'],
  ['Toluna Influencers', 'Take surveys, test products and vote in community topics for reward points.', '$2–$8/hr', 2, 8, 'PayPal|Gift Card', 'Beginner', 'https://www.toluna.com/', 'online-surveys|product-testing'],
  ['Pinecone Research', 'Join invitation-based consumer surveys and occasional product tests.', '$3–$12/hr', 3, 12, 'PayPal|Gift Card', 'Beginner', 'https://www.pineconeresearch.com/', 'online-surveys|product-testing'],
  ['Swagbucks', 'Earn points from surveys, offers and lightweight online discovery activities.', '$2–$10/hr', 2, 10, 'PayPal|Gift Card', 'Beginner', 'https://www.swagbucks.com/p/register', 'online-surveys|microtasks'],
  ['ySense', 'Complete surveys, offers and online tasks with availability across many countries.', '$2–$12/hr', 2, 12, 'PayPal|Payoneer', 'Beginner', 'https://www.ysense.com/', 'online-surveys|microtasks'],
  ['PaidViewpoint', 'Answer short profile-matched surveys with no mid-survey disqualification.', '$2–$10/hr', 2, 10, 'PayPal', 'Beginner', 'https://paidviewpoint.com/', 'online-surveys|paid-research'],
  ['Qmee', 'Take surveys and earn flexible cash rewards without a fixed withdrawal threshold.', '$2–$12/hr', 2, 12, 'PayPal|Gift Card', 'Beginner', 'https://www.qmee.com/', 'online-surveys|microtasks'],
  ['Microworkers', 'Complete small digital tasks including research, validation and content checks.', '$3–$15/hr', 3, 15, 'PayPal|Payoneer|Skrill', 'Beginner', 'https://www.microworkers.com/signup.php', 'microtasks|data-validation'],
  ['SproutGigs', 'Browse small online gigs in data entry, testing, research and digital promotion.', '$3–$15/hr', 3, 15, 'PayPal|Skrill|Crypto', 'Beginner', 'https://sproutgigs.com/signup.php', 'microtasks|data-validation'],
  ['Premise', 'Complete location-aware surveys, observations and photo collection tasks by phone.', '$3–$20/task', 3, 20, 'PayPal|Payoneer|Mobile Money', 'Beginner', 'https://www.premise.com/contributors/', 'microtasks|field-research'],
]);

export const gigsData: GigPlatform[] = [...aiData, ...testing, ...freelance, ...tutoring, ...writing, ...microtasks];

export interface SeoCategory {
  slug: string;
  title: string;
  navLabel: string;
  category: GigCategoryId;
  keywords: string[];
  payRange: string;
  intro: string;
}

export const seoCategories: SeoCategory[] = [
  { slug: 'ai-data-annotation', title: 'Remote AI Data Annotation Jobs', navLabel: 'AI Data Annotation', category: 'ai-data-annotation', keywords: ['data-annotation'], payRange: '$15–$40/hr', intro: 'Label, classify and review training data used by modern AI systems.' },
  { slug: 'ai-model-training', title: 'AI Model Training Jobs', navLabel: 'AI Model Training', category: 'ai-data-annotation', keywords: ['ai-model-training'], payRange: '$20–$60/hr', intro: 'Use language, coding or professional expertise to improve model outputs.' },
  { slug: 'search-evaluation', title: 'Search Engine Evaluator Jobs', navLabel: 'Search Evaluation', category: 'ai-data-annotation', keywords: ['search-evaluation'], payRange: '$12–$30/hr', intro: 'Rate search, maps and advertising results for relevance and quality.' },
  { slug: 'speech-data-jobs', title: 'Remote Speech Data Collection Jobs', navLabel: 'Speech Data', category: 'ai-data-annotation', keywords: ['speech-data'], payRange: '$10–$30/hr', intro: 'Record and validate multilingual speech data for voice-enabled AI.' },
  { slug: 'computer-vision-annotation', title: 'Computer Vision Annotation Jobs', navLabel: 'Computer Vision', category: 'ai-data-annotation', keywords: ['computer-vision'], payRange: '$10–$30/hr', intro: 'Label images, video and spatial data for computer-vision models.' },
  { slug: 'ai-expert-review', title: 'AI Expert Review & Evaluation Jobs', navLabel: 'Expert AI Review', category: 'ai-data-annotation', keywords: ['expert-review'], payRange: '$25–$100/hr', intro: 'Apply specialist knowledge to high-value AI evaluation projects.' },
  { slug: 'user-testing', title: 'Remote User Testing Jobs', navLabel: 'User Testing', category: 'user-testing', keywords: ['usability'], payRange: '$10–$60/test', intro: 'Get paid to speak your thoughts while trying digital products.' },
  { slug: 'website-testing', title: 'Website Testing Jobs from Home', navLabel: 'Website Testing', category: 'user-testing', keywords: ['website-testing'], payRange: '$10–$60/test', intro: 'Review websites for usability, clarity and conversion blockers.' },
  { slug: 'app-testing', title: 'Mobile App Testing Jobs', navLabel: 'App Testing', category: 'user-testing', keywords: ['app-testing'], payRange: '$8–$60/test', intro: 'Test iOS and Android experiences on real devices.' },
  { slug: 'game-testing', title: 'Remote Game Testing Jobs', navLabel: 'Game Testing', category: 'user-testing', keywords: ['game-testing'], payRange: '$9–$36/test', intro: 'Play unreleased games and provide structured player feedback.' },
  { slug: 'qa-testing', title: 'Freelance QA & Bug Testing Jobs', navLabel: 'QA Testing', category: 'user-testing', keywords: ['qa-testing', 'bug-testing'], payRange: '$15–$50/hr', intro: 'Find bugs, run test cases and build a professional QA track record.' },
  { slug: 'freelance-platforms', title: 'Best Freelance Platforms', navLabel: 'Freelance Platforms', category: 'freelance-platforms', keywords: [], payRange: '$15–$150/hr', intro: 'Compare leading global marketplaces and curated talent networks.' },
  { slug: 'freelance-developers', title: 'Freelance Developer Platforms', navLabel: 'Developer Gigs', category: 'freelance-platforms', keywords: ['freelance-developers'], payRange: '$40–$200/hr', intro: 'Find software contracts from open marketplaces and vetted networks.' },
  { slug: 'freelance-designers', title: 'Freelance Design Platforms', navLabel: 'Design Gigs', category: 'freelance-platforms', keywords: ['freelance-designers'], payRange: '$25–$150/hr', intro: 'Win branding, product and visual design work from global clients.' },
  { slug: 'virtual-assistant-jobs', title: 'Remote Virtual Assistant Jobs', navLabel: 'Virtual Assistant', category: 'freelance-platforms', keywords: ['virtual-assistant-jobs'], payRange: '$10–$40/hr', intro: 'Find flexible admin, operations and customer support projects.' },
  { slug: 'freelance-marketing', title: 'Freelance Marketing Platforms', navLabel: 'Marketing Gigs', category: 'freelance-platforms', keywords: ['freelance-marketing'], payRange: '$25–$150/hr', intro: 'Connect with content, growth and performance marketing clients.' },
  { slug: 'freelance-creative-work', title: 'Creative Freelance Platforms', navLabel: 'Creative Work', category: 'freelance-platforms', keywords: ['freelance-creative-work'], payRange: '$15–$120/hr', intro: 'Sell creative services and build long-term client relationships.' },
  { slug: 'online-tutoring', title: 'Best Online Tutoring Jobs', navLabel: 'Online Tutoring', category: 'online-tutoring', keywords: [], payRange: '$15–$35/hr', intro: 'Teach from home through established education marketplaces.' },
  { slug: 'english-tutoring', title: 'Teach English Online Jobs', navLabel: 'English Tutoring', category: 'online-tutoring', keywords: ['english-tutoring'], payRange: '$10–$30/hr', intro: 'Coach conversational and business English learners worldwide.' },
  { slug: 'language-teaching', title: 'Online Language Teaching Jobs', navLabel: 'Language Teaching', category: 'online-tutoring', keywords: ['language-teaching'], payRange: '$10–$40/hr', intro: 'Set your schedule and teach languages to global learners.' },
  { slug: 'academic-tutoring', title: 'Remote Academic Tutoring Jobs', navLabel: 'Academic Tutoring', category: 'online-tutoring', keywords: ['academic-tutoring'], payRange: '$15–$50/hr', intro: 'Support school and university learners across specialist subjects.' },
  { slug: 'course-creation', title: 'Online Course Teaching Platforms', navLabel: 'Course Creation', category: 'online-tutoring', keywords: ['course-creation'], payRange: '$20–$70/hr', intro: 'Design and lead live or cohort-based classes online.' },
  { slug: 'remote-writing', title: 'Remote Writing Jobs', navLabel: 'Remote Writing', category: 'writing-translation', keywords: ['freelance-writing'], payRange: '$20–$80/hr', intro: 'Find credible editorial, copywriting and content marketing work.' },
  { slug: 'freelance-writing', title: 'Freelance Writing Platforms', navLabel: 'Freelance Writing', category: 'writing-translation', keywords: ['freelance-writing'], payRange: '$0.08–$0.50/word', intro: 'Compare content marketplaces and direct-client writing networks.' },
  { slug: 'translation-jobs', title: 'Remote Translation Jobs', navLabel: 'Translation Jobs', category: 'writing-translation', keywords: ['translation-jobs'], payRange: '$15–$80/hr', intro: 'Find translation and localization work for your language pairs.' },
  { slug: 'editing-proofreading', title: 'Remote Editing & Proofreading Jobs', navLabel: 'Editing & Proofreading', category: 'writing-translation', keywords: ['editing-proofreading'], payRange: '$20–$100/hr', intro: 'Offer structural editing, copyediting and proofreading services.' },
  { slug: 'localization-work', title: 'Freelance Localization Jobs', navLabel: 'Localization', category: 'writing-translation', keywords: ['localization'], payRange: '$20–$80/hr', intro: 'Adapt products and content for international audiences.' },
  { slug: 'microtasks', title: 'Best Online Microtask Sites', navLabel: 'Microtasks', category: 'microtasks-research', keywords: ['microtasks'], payRange: '$3–$20/hr', intro: 'Complete short digital and field tasks on a flexible schedule.' },
  { slug: 'paid-research', title: 'Best Paid Research Studies Online', navLabel: 'Paid Research', category: 'microtasks-research', keywords: ['paid-research'], payRange: '$10–$150/study', intro: 'Share your experience in academic and commercial research.' },
  { slug: 'online-surveys', title: 'Legitimate Paid Survey Sites', navLabel: 'Paid Surveys', category: 'microtasks-research', keywords: ['online-surveys'], payRange: '$2–$20/hr', intro: 'Compare established survey panels with clear reward options.' },
  { slug: 'market-research-interviews', title: 'Paid Market Research Interviews', navLabel: 'Research Interviews', category: 'microtasks-research', keywords: ['market-research-interviews'], payRange: '$30–$250/study', intro: 'Earn more from moderated interviews and professional research.' },
  { slug: 'product-testing', title: 'Paid Product Testing Opportunities', navLabel: 'Product Testing', category: 'microtasks-research', keywords: ['product-testing'], payRange: '$5–$50/test', intro: 'Review products and experiences for consumer research teams.' },
];

export function getCategoryPlatforms(category: SeoCategory) {
  const group = gigsData.filter((gig) => gig.category === category.category);
  if (!category.keywords.length) return group;
  const tagged = group.filter((gig) => category.keywords.some((keyword) => gig.tags.includes(keyword)));
  return tagged.length >= 3 ? tagged : group;
}

export const directoryStats = {
  platforms: gigsData.length,
  categories: GIG_CATEGORIES.length,
  seoPages: seoCategories.length,
};
