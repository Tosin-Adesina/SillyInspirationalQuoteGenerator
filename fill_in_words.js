

let actVerbs = `Act Answer Approve Arrange Break Build Buy Coach Color Cough Create Complete Cry Dance Describe Draw Drink Eat Edit Enter Exit Imitate Invent Jump Laugh Lie Listen Paint Plan Play Read Replace Run Scream See Shop Shout Sing Skip Sleep Sneeze Solve Study Teach Touch Turn Walk Win Write Whistle Yank Zip`;
let thinkVerbs = `Concern Decide Dislike Doubt Feel Forget Hate Hear Hope Impress Know Learn Like Look Love Mind Notice Own Perceive Realize Recognize Remember See Smell Surprise Please Prefer Promise Think Understand`;

let adj = `adorable

adventurous

aggressive

agreeable

alert

alive

amused

angry

annoyed

annoying

anxious

arrogant

ashamed

attractive

average

awful

bad

beautiful

better

bewildered

black

bloody

blue

blue-eyed

blushing

bored

brainy

brave

breakable

bright

busy

calm

careful

cautious

charming

cheerful

clean

clear

clever

cloudy

clumsy

colorful

combative

comfortable

concerned

condemned

confused

cooperative

courageous

crazy

creepy

crowded

cruel

curious

cute

dangerous

dark

dead

defeated

defiant

delightful

depressed

determined

different

difficult

disgusted

distinct

disturbed

dizzy

doubtful

drab

dull

eager

easy

elated

elegant

embarrassed

enchanting

encouraging

energetic

enthusiastic

envious

evil

excited

expensive

exuberant

fair

faithful

famous

fancy

fantastic

fierce

filthy

fine

foolish

fragile

frail

frantic

friendly

frightened

funny

gentle

gifted

glamorous

gleaming

glorious

good

gorgeous

graceful

grieving

grotesque

grumpy

handsome

happy

healthy

helpful

helpless

hilarious

homeless

homely

horrible

hungry

hurt

ill

important

impossible

inexpensive

innocent

inquisitive

itchy

jealous

jittery

jolly

joyous

kind

lazy

light

lively

lonely

long

lovely

lucky

magnificent

misty

modern

motionless

muddy

mushy

mysterious

nasty

naughty

nervous

nice

nutty

obedient

obnoxious

odd

old-fashioned

open

outrageous

outstanding

panicky

perfect

plain

pleasant

poised

poor

powerful

precious

prickly

proud

putrid

puzzled

quaint

real

relieved

repulsive

rich

scary

selfish

shiny

shy

silly

sleepy

smiling

smoggy

sore

sparkling

splendid

spotless

stormy

strange

stupid

successful

super

talented

tame

tasty

tender

tense

terrible

thankful

thoughtful

thoughtless

tired

tough

troubled

ugliest

ugly

uninterested

unsightly

unusual

upset

uptight

vast

victorious

vivacious

wandering

weary

wicked

wide-eyed

wild

witty

worried

worrisome

wrong

zany

zealous
`;

actVerbs = actVerbs.split(' ');
thinkVerbs = thinkVerbs.split(' ');
adj = adj.split('\n\n');
let allVerbs = actVerbs.concat(thinkVerbs);

exports.actVerbs = actVerbs;
exports.thinkVerbs = thinkVerbs;
exports.adj = adj;
exports.allVerbs = allVerbs;