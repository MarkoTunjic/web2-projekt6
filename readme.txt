########################### NAPOMENA ################################
Prije upotrebe aplikacije u komandnu liniju u folderu u kojem je projekt unijeti naredbu: npm install
#####################################################################
interpolation/one-way binding - Da (interpolation), src/components/MovieCard.vue:7,8,11,17,22
two-way binding - Da, src/components/Question.vue:42-46 (specificno redak 44) varijabla favoriteMovie je povezana sa inputom koji ima id favoriteMovieInput
methods - Da, src/components/Question.vue:11-17, metoda koja je povezana sa gumbom za potvrdu odgovora i postavlja answered na true
computed properties - Da, src/components/Question.vue:18-27 - property koji se računa na osnovu varijable favoriteMovie i vraća poruku u ovisnosti o postojanju unesenog filma
barem jedan scoped style - Da, src/components/MovieCard.vue:76-246 - stil za karticu koja sadrži informacije o filmu
koristiti barem jedan lifecycle hook - Da, src/views/HomeView.vue:8:11 - metoda koja se poziva prilikom mount-a
routing (više stranica)
	aplikacija mora biti bookmarkable, tako da rade linkovi (ne samo na root, već i moj-web.com/stranica1, moj-web.com/stranica2) - Da, src/App.vue:12-16 sadrži linkove na koje se može otići, a src/router/index.js sadrži mapiranje komponenti na rute
   dinamičko usmjeravanje s 404 stranicom ("catch all") - Da, src/router/index.js:25-29 ako se ne pogodi stranica prikazuje se 404
(barem) dvije komponente
    komponenta bez stanja, koristiti properties - Da, komponenta src/components/MovieCard.vue nema definiran data() nego samo propove
    komponenta sa stanjem - Da, src/components/Question.vue ima definiran data i na osnovu njega pretezito varijable answered rendera komponente
barem jedna komponenta mora emitirati barem jedan event - Da, komponenta src/components/MovieCard.vue:69-71 emitira se dogodaj da je korisnik kliknuo na brisanje filma
store (Pinia) - Da, src/stores/movies.js i upotrebljava se pretežno u src/views/HomeView.vue:8-24 i 30-33
asinkroni dohvat podataka s backenda, možete:
    možete mock napraviti, držati podatke u memoriji, ali mora biti asinkroni poziv/upis - Da src/views/HomeView.vue:8-11 sa interneta se u json formatu dohvaća popis filmova