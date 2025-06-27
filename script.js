// Dane quizu
const quizData = {
  "questions": [
    {
      "question": "reqex: (.{2})(12|21)\\1 pasuje do:",
      "answers": [
        {"text": "ab12ab", "correct": true},
        {"text": "bc12cb", "correct": false},
        {"text": "abc12|21cba", "correct": false},
        {"text": "..12|21..", "correct": false}
      ]
    },
    {
      "question": "request url \"/\" domyślnie uruchomi [kontroler.metoda]:",
      "answers": [
        {"text": "Default.index", "correct": false},
        {"text": "Home.Index", "correct": false},
        {"text": "HomeController.Index", "correct": true},
        {"text": "DefaultController.Index", "correct": false}
      ]
    },
    {
      "question": "Jeśli odwołam się do adresu https://localhost jakie protokoły nie zostaną użyte",
      "answers": [
        {"text": "TLS", "correct": false},
        {"text": "HTTP", "correct": false},
        {"text": "UDP", "correct": true},
        {"text": "TCP", "correct": false}
      ]
    },
    {
      "question": "EF: Chcę utworzyć relacje w modelu B do modelu A tak, aby relacja w B wskazywała wyłącznie na jeden obiekt typu B poprzez:",
      "answers": [
        {"text": "W klasie A tworze właściwość: \"public virtual B A {get; set;}\"", "correct": false},
        {"text": "W klasie B tworze właściwość: \"public virtual A b {get; set;}\"", "correct": false},
        {"text": "W klasie A tworze właściwość: \"public B a {get; set;}\"", "correct": false},
        {"text": "W klasie B tworze właściwość: \"public virtual A A {get; set;}\"", "correct": true}
      ]
    },
    {
      "question": "EF: [Key]",
      "answers": [
        {"text": "Mogę oznaczyć klucz główny", "correct": true},
        {"text": "Mogę oznaczyć wiele kluczy głównych", "correct": false},
        {"text": "Mogę oznaczyć klucz obcy", "correct": false},
        {"text": "Mogę oznaczyć wiele kluczy obcych", "correct": false}
      ]
    },
    {
      "question": "MVC: kod akcji kontrolera: return View(\"AAA\")",
      "answers": [
        {"text": "Zwróci użytkownikowi odpowiedź z napisem \"AAA\" zamiast html", "correct": false},
        {"text": "Zwróci użytkownikowi odpowiedź wygenerowaną z szablon o nazwie akcji.", "correct": false},
        {"text": "Zwróci użytkownikowi odpowiedź z szablonu o nazwie \"AAA\".", "correct": true},
        {"text": "Żadne z powyższych", "correct": false}
      ]
    },
    {
      "question": "EF: [ForeignKey(\"Catalogld\")]",
      "answers": [
        {"text": "wskazuje nazwę właściwości z kluczem obcym", "correct": true},
        {"text": "Definiuje nazwę klucz obcego", "correct": false},
        {"text": "Wskazuje na klucz główny w powiązanym obiekcie", "correct": false},
        {"text": "Atrybut nadajemy właściwości typu referencyjnego z modyfikatorem virtual", "correct": false}
      ]
    },
    {
      "question": "view: atrubut asp-validation-summary=\"",
      "answers": [
        {"text": "powiązane pole input, będzie skryptowo walidować dane", "correct": false},
        {"text": "w tagu tym wyświetlane będą błędy walidacji dla wskazanej właściwości modelu", "correct": false},
        {"text": "Przekształca oznaczony tag w skrypt walidujący dane", "correct": false},
        {"text": "w tagu tym wyświetlane będą błędy walidacji dla całego modelu", "correct": true}
      ]
    },
    {
      "question": "view: atrybut asp-validation-for=\"",
      "answers": [
        {"text": "oznaczony input skryptowo waliduje dane", "correct": false},
        {"text": "w tagu tym wyświetlane będą błędy walidacji dla wskazanej właściwości modelu", "correct": true},
        {"text": "Przekształca oznaczony tag w skrypt walidujący dane", "correct": false},
        {"text": "w tagu tym wyświetlane będą błędy walidacji dla całego modelu", "correct": false}
      ]
    },
    {
      "question": "model: atrybut [CreditCard]",
      "answers": [
        {"text": "umieszczone przed klasą dodaje pola obsługujące kartę kredytową", "correct": false},
        {"text": "Umieszczone przed właściwością waliduje poprawność wpisanego numeru bankowego", "correct": false},
        {"text": "Umieszczone przed właściwością waliduje poprawność wpisanego numeru karty kredytowej", "correct": true},
        {"text": "skrypt migracyjny EF tworzy zestaw pól po stronie bazy do obsługi kart płatniczych", "correct": false}
      ]
    },
    {
      "question": "Jeśli odwołam się do adresu http://localhost jakie protokoły zostaną użyte",
      "answers": [
        {"text": "TLS", "correct": false},
        {"text": "HTTP", "correct": true},
        {"text": "UDP", "correct": false},
        {"text": "TCP", "correct": true},
        {"multiCorrect": true}
      ]
    },
    {
      "question": "model: atrybut [Compare]:",
      "answers": [
        {"text": "Umieszczamy przed klasą w celu porównania z inną klasą", "correct": false},
        {"text": "umieszczamy przed właściwością, aby porównać ją z inna właściwością w klasie", "correct": true},
        {"text": "Wykorzystywana w mechanizmie walidacji danych", "correct": true},
        {"text": "wykorzystywana do tworzenia skryptów migracyjnych", "correct": false},
        {"multiCorrect": true}
      ]
    },
    {
      "question": "model: atrybut [RegularExpression]",
      "answers": [
        {"text": "umieszczamy przed klasą modelu", "correct": false},
        {"text": "Umieszczamy przed klasą kontrolera", "correct": false},
        {"text": "umieszczamy przed argumentami w metodzie akcji kontrolera", "correct": false},
        {"text": "umieszczane przed właściwościami modelu danych", "correct": true}
      ]
    },
    {
      "question": "dependency injection w asp NET:",
      "answers": [
        {"text": "klasy wstrzykiwanych zależności muszą dziedziczyć po IService", "correct": false},
        {"text": "Zależności (referencje do serwisów) wstrzykiwane są do konstruktorów", "correct": true},
        {"text": "klasy wstrzykiwanych zależności muszą dziedziczyć po IAbstarctFactory", "correct": false},
        {"text": "Zależności (referencje do serwisów) wstrzykiwane są do obiektów po ich utworzeniu", "correct": false}
      ]
    },
    {
      "question": "które z wymienionych klas są domyślnie serwisami w ASP .NET",
      "answers": [
        {"text": "ApplicationDbContext", "correct": true},
        {"text": "IService", "correct": false},
        {"text": "IAction", "correct": false},
        {"text": "ILogger", "correct": true},
        {"multiCorrect": true}
      ]
    },
    {
      "question": "DI: serwisy w asp net rejestrujemy:",
      "answers": [
        {"text": "Dodając typ interefesju oraz klasy serwisu do kolekcji Services klasy WebApplicationBuilder", "correct": true},
        {"text": "Dodając referencje do obiektu serwisu do kolekcji Services klasy WebApplicationBuilder", "correct": false},
        {"text": "definiując go jako argument konstruktora w kontrolerze", "correct": false},
        {"text": "tworząc obiekt serwisu w konstruktorze kontrolera", "correct": false}
      ]
    },
    {
      "question": "View: @ w szablonach:",
      "answers": [
        {"text": "Pozwala zagnieździć kod C# w kodzie html.", "correct": true},
        {"text": "Pozwala zagnieździć kod JavaScript w kodzie html.", "correct": false},
        {"text": "Jako atrybut html pozwala nadawać elementom input walidację w kodzie html.", "correct": false},
        {"text": "Pozwala tworzyć bloki kodu HTML, które będą wyświetlane warunkowo.", "correct": false}
      ]
    },
    {
      "question": "View: @model w szablonach?",
      "answers": [
        {"text": "Pozwala określić model danych dla widoku", "correct": true},
        {"text": "Jest odwołaniem do obiektu modelu danych w widoku", "correct": false},
        {"text": "Wskazuje pozycje, w której model ma zostać wyświetlony", "correct": false},
        {"text": "Można użyć tylko raz w widoku", "correct": true},
        {"multiCorrect": true}
      ]
    },
    {
      "question": "Linq: Zapytanie \"SELECT * FROM 'PRODUCT' WHERE 'TITLE' = '{q}'\" moge zapisać za pomoca linqu?",
      "answers": [
        {"text": "db.PRODUCT.Where(a=>a.TITLE==\"{q}\")", "correct": true},
        {"text": "db.PRODUCT.Select(a=>a.TITLE==\"{q}\")", "correct": false},
        {"text": "db.Where(PRODUCT p->p.TITLE==\"{q}\")", "correct": false},
        {"text": "db.Select(PRODUCT p->p.TITLE==\"{q}\")", "correct": false}
      ]
    },
    {
      "question": "EF: metode SaveChanges klasy DBContext",
      "answers": [
        {"text": "Zmiany wykonane w DBContext zostaną zapisane w pliku.", "correct": false},
        {"text": "Cały kontekst DBContext zostanie zapisany do pliku.", "correct": false},
        {"text": "Kontekst obiektu DBContext nadpisze kontekst bazy danych.", "correct": false},
        {"text": "Zmiany wykonane w kontekście DBContext zostaną odwzorowane w bazie danych.", "correct": true}
      ]
    },
    {
      "question": "chcę przesyłać strumień wideo na żywo jaki protokół warstwy transportowej powinienem użyć:",
      "answers": [
        {"text": "TLS", "correct": false},
        {"text": "HTTP", "correct": false},
        {"text": "UDP", "correct": true},
        {"text": "TCP", "correct": false}
      ]
    },
    {
      "question": "Walidacja po stronie front endu:",
      "answers": [
        {"text": "bez niej narażamy aplikacje na atak", "correct": true},
        {"text": "jest wyłącznie w celach estetycznych", "correct": false},
        {"text": "Odbywa się skryptowo w przeglądarce klienta", "correct": true},
        {"text": "odbywa się po stronie serwera, ale w trakcie obsługi żądania wysłanego z przeglądarki", "correct": false},
        {"multiCorrect": true}
      ]
    },
    {
      "question": "Walidacja po stronie back endu:",
      "answers": [
        {"text": "bez niej narażamy aplikacje na atak", "correct": true},
        {"text": "każde żądanie wymaga walidacji", "correct": true},
        {"text": "każdy parametr przesyłany metodą GET musi zostać zweryfikowany wyrażeniem regularnym", "correct": false},
        {"text": "każdy parametr przesyłany metodą POST musi zostać zweryfikowany wyrażeniem regularnym", "correct": false},
        {"multiCorrect": true}
      ]
    },
    {
      "question": "MVC: kod akcji kontrolera: return View(123)",
      "answers": [
        {"text": "Zwróci użytkownikowi odpowiedź w formie tekstu \"123\" zamiast html", "correct": false},
        {"text": "Zwróci użytkownikowi odpowiedź wygenerowaną z szablon o nazwie akcji.", "correct": true},
        {"text": "Zwróci użytkownikowi odpowiedź z szablonu o nazwie \"123\".", "correct": false},
        {"text": "Widok musi zawierać linijkę @model Int", "correct": true},
        {"multiCorrect": true}
      ]
    },
    {
      "question": "request url \"/Home/Test/123\" domyślnie uruchomi [kontroler.akcja]:",
      "answers": [
        {"text": "Test. 123 w katalogu Home", "correct": false},
        {"text": "HomeController. Test z parametrem id=123", "correct": true},
        {"text": "Home Index z parametrem id=123", "correct": false},
        {"text": "HomeController. Test z parametrem index=123", "correct": false}
      ]
    },
    {
      "question": "request url \"/Test/A?A=123&B=321\" domyślnie uruchomi [kontroler.akcja]:",
      "answers": [
        {"text": "Test.A z parametrami A=123 i B=321", "correct": false},
        {"text": "TestController.A z parametrami A=123 i B=321", "correct": true},
        {"text": "Test.A z parametrami B=123 i A=321", "correct": false},
        {"text": "HomeController.Test z parametrami A?A=123 i &B=321", "correct": false}
      ]
    },
    {
      "question": "Controller kod: public IActionResult Person(PersonModelView person){return View(person);}",
      "answers": [
        {"text": "jest to kod akcji Person", "correct": true},
        {"text": "Zwraca kod html wygenerowany z szablonu o nazwie Person", "correct": true},
        {"text": "Szablon widoku nie wymaga silnego typowania", "correct": false},
        {"text": "kod jest niepoprawny", "correct": false},
        {"multiCorrect": true}
      ]
    },
    {
      "question": "Controller kod: public IActionResult Person(string a, string g){return RedirectToAction(\"Person\", new (a=g, g=a));}",
      "answers": [
        {"text": "jest to konstruktor klasy Person", "correct": false},
        {"text": "kod wygeneruje kod html z szablonu „Person\"", "correct": false},
        {"text": "wykonanie kodu doprowadzi do przekierowania przeglądarki", "correct": true},
        {"text": "kod jest poprawny, ale doprowadzi do niepoprawnej pracy aplikacji", "correct": false}
      ]
    },
    {
      "question": "katalog wwwroot",
      "answers": [
        {"text": "Katalog na pliki statyczne", "correct": true},
        {"text": "kompilator umieszcza w nim skompilowaną aplikację", "correct": false},
        {"text": "Umieszczamy w nim pliki skryptów JS", "correct": true},
        {"text": "zasoby adresujemy \"/{nazwa pliku}\"", "correct": true},
        {"multiCorrect": true}
      ]
    },
    {
      "question": "katalog Models",
      "answers": [
        {"text": "Umieszczamy w nim klasy kontekstu bazy danych", "correct": false},
        {"text": "Umieszczamy w nim klasy modeli danych", "correct": true},
        {"text": "Umieszczamy w nim klasy kontrolerów", "correct": false},
        {"text": "Umieszczamy w nich szablony widoków", "correct": false}
      ]
    },
    {
      "question": "katalog Views",
      "answers": [
        {"text": "Umieszczamy w nim klasy kontekstu bazy danych", "correct": false},
        {"text": "Umieszczamy w nim klasy modeli danych", "correct": false},
        {"text": "Umieszczamy w nim klasy kontrolerów", "correct": false},
        {"text": "Umieszczamy w nich szablony widoków", "correct": true}
      ]
    },
    {
      "question": "katalog Controllers",
      "answers": [
        {"text": "Umieszczamy w nim klasy kontekstu bazy danych", "correct": false},
        {"text": "Umieszczamy w nim klasy modeli danych.", "correct": false},
        {"text": "Umieszczamy w nim klasy kontrolerów", "correct": true},
        {"text": "Umieszczamy w nich szablony widoków", "correct": false}
      ]
    },
    {
      "question": "plik z rozszerzenie .csproj",
      "answers": [
        {"text": "Plik solucji", "correct": false},
        {"text": "Pilik projektu.", "correct": true},
        {"text": "Zawiera listę bibliotek importowanych do projektu", "correct": true},
        {"text": "Plik z kodem źródłowym.", "correct": false},
        {"multiCorrect": true}
      ]
    },
    {
      "question": "plik appsettings.json",
      "answers": [
        {"text": "plik konfiguracyjny", "correct": true},
        {"text": "nieedytowalny po skompilowaniu projekt", "correct": false},
        {"text": "edytowalny po skompillowaniu projektu", "correct": true},
        {"text": "może zawierać konfiguracje połączenia do bazy danych", "correct": true},
        {"multiCorrect": true}
      ]
    },
    {
      "question": "request url \"/\" domyślnie uruchomi [kontroler.akcja]:",
      "answers": [
        {"text": "Default.index", "correct": false},
        {"text": "Home.Index", "correct": false},
        {"text": "HomeController.Index", "correct": true},
        {"text": "DefaultController.Index", "correct": false}
      ]
    },
    {
      "question": "Routing: app.MapControllerRoute(name: \"test\", pattern: \"_b{id}\", defaults: new (controller \"Home\", action= \"test_test\")); sparsuje adres URL:",
      "answers": [
        {"text": "/Home/test test", "correct": false},
        {"text": "/Home/test_test?id=1", "correct": false},
        {"text": "/_b1?id=2", "correct": false},
        {"text": "/_b3", "correct": true}
      ]
    },
    {
      "question": "Routing: app.MapControllerRoute(name: \"default2\", pattern: \"(action=lista)/(controller=Home)/{id?}\"); sparsuje adres URL",
      "answers": [
        {"text": "/Home/lista/1", "correct": false},
        {"text": "/", "correct": false},
        {"text": "lista/Home", "correct": true},
        {"text": "/?id=1", "correct": false}
      ]
    },
    {
      "question": "URL routing w asp.net MVC:",
      "answers": [
        {"text": "Służy do parsowania parametru URL przychodzących żądań", "correct": true},
        {"text": "Służy do generowania adresów URL", "correct": true},
        {"text": "na pojedynczy kontroler nie może wskazywać więcej niż jedna reguła routingu", "correct": false},
        {"text": "pozwala nadać domyślne wartości parsowanym parametrom", "correct": true},
        {"multiCorrect": true}
      ]
    },
    {
      "question": "Controller: Atrybut [HttpGet] używamy:",
      "answers": [
        {"text": "oznaczmy argumenty akcji, które będą przesyłane metodą GET", "correct": false},
        {"text": "oznaczmy kontrolery, które będą obsługiwać jedynie żądania HTTP z metodą GET", "correct": false},
        {"text": "oznaczmy akcje kontrolera, które będą obsługiwać jedynie żądania HTTP z metodą GET", "correct": true},
        {"text": "oznaczmy modele danych, tak żeby były wypełniane jedynie danymi przesłanymi metodą GET", "correct": false}
      ]
    },
    {
      "question": "Controller: Atrybut [HttpPost] używamy:",
      "answers": [
        {"text": "oznaczmy argumenty akcji, które będą przesyłane metodą POST", "correct": false},
        {"text": "oznaczmy kontrolery, które będą obsługiwać jedynie żądania HTTP z metodą POST", "correct": false},
        {"text": "oznaczmy akcje kontrolera, które będą obsługiwać jedynie żądania HTTP z metodą POST", "correct": true},
        {"text": "oznaczmy modele danych, tak żeby były wypełniane jedynie danymi przesłanymi metodą POST", "correct": false}
      ]
    },
    {
      "question": "Wzorzec MVC w asp.net",
      "answers": [
        {"text": "Rozdziela logike aplikacji od modeli danych i warstwy prezentacji", "correct": true},
        {"text": "Pozwala generować kod HTML jedynie w szablonach widoków, przesyłanie innego kontekstu jest niemożliwe.", "correct": false},
        {"text": "Pozwala przesyłać dane do szablonu widoku jedynie przez silne typowanie.", "correct": false},
        {"text": "Akcja kontrolera może być powiązana jedynie z jednym szablonem widoku, którego nazwa będzie identyczna z nazwą akcji", "correct": false}
      ]
    },
    {
      "question": "HTTP-Request: metoda GET",
      "answers": [
        {"text": "dane (parametry) przesyłane w adresie URL", "correct": true},
        {"text": "dane (parametry) przesyłane w ciele żądania", "correct": false},
        {"text": "można wysłać kompletny link wraz z parametrami", "correct": true},
        {"text": "można przesłać plik", "correct": false},
        {"multiCorrect": true}
      ]
    },
    {
      "question": "HTTP-Request: metoda POST",
      "answers": [
        {"text": "Dane (parametry) przesyłane w adresie URL", "correct": false},
        {"text": "Dane (parametry) przesyłane w ciele żądania", "correct": true},
        {"text": "Można wysłać kompletny link wraz z parametrami", "correct": false},
        {"text": "Można przesłać plik", "correct": true},
        {"multiCorrect": true}
      ]
    },
    {
      "question": "HTTP-Response: Status code",
      "answers": [
        {"text": "kody z grupy 200 oznacza błąd serwera", "correct": false},
        {"text": "kody z grupy 500 oznacza bląd serwera", "correct": true},
        {"text": "kod 404 oznacza nie odnaleziono zasobu", "correct": true},
        {"text": "kody z grupy 300 zmuszają przeglądarkę do przekierowania", "correct": true},
        {"multiCorrect": true}
      ]
    },
    {
      "question": "HTTP-Herder: Content-Type",
      "answers": [
        {"text": "Zawiera MIME Type przesyłanego kontekstu", "correct": true},
        {"text": "Przesyłany jedynie w nagłówku odpowiedzi od serwera.", "correct": false},
        {"text": "Przeglądarka na podstawie Contetn-Type wie, jak wyrenderować obsłużyć otrzymane dane.", "correct": true},
        {"text": "Żadne powyższe", "correct": false},
        {"multiCorrect": true}
      ]
    },
    {
      "question": "MIME Type",
      "answers": [
        {"text": "Służy wyłączeni do określania nieinterpretowalnych danych binamych.", "correct": false},
        {"text": "Określa typ przesyłanych danych pomiędzy serwerem a klientem.", "correct": true},
        {"text": "Wpływa na sposób interpretacji danych przez serwer lub przeglądarkę.", "correct": true},
        {"text": "Służy wyłącznie do określania danych tekstowych.", "correct": false},
        {"multiCorrect": true}
      ]
    },
    {
      "question": "DNS, do czego służy.",
      "answers": [
        {"text": "Pozyskania adresu IP na podstawie nazwy hosta", "correct": false},
        {"text": "Pozyskania adresu IP na podstawie nazwy domeny", "correct": true},
        {"text": "Synchronizacji czasu ze wskazanym hostem", "correct": false},
        {"text": "Żadne z powyższych", "correct": false}
      ]
    },
    {
      "question": "Jeśli odwołam się do adresu https://localhost jakie protokoły zostaną użyte",
      "answers": [
        {"text": "TLS", "correct": true},
        {"text": "HTTP", "correct": true},
        {"text": "UDP", "correct": false},
        {"text": "TCP", "correct": true},
        {"multiCorrect": true}
      ]
    },
    {
      "question": "Chce przesyłać strumień wideo na żywo jaki protokół warstwy transportowej powinienem użyć:",
      "answers": [
        {"text": "TLS", "correct": false},
        {"text": "HTTP", "correct": false},
        {"text": "UDP", "correct": true},
        {"text": "TCP", "correct": false}
      ]
    },
    {
      "question": "chce przesłać dokument, jaki protokół warstwy transportowej powinienem użyć:",
      "answers": [
        {"text": "TLS", "correct": false},
        {"text": "HTTP", "correct": false},
        {"text": "UDP", "correct": false},
        {"text": "TCP", "correct": true}
      ]
    },
    {
      "question": "regex (.{3})(12|21)\\1 pasuje do:",
      "answers": [
        {"text": "abc12cba", "correct": false},
        {"text": "abc12abc", "correct": true},
        {"text": "abc12|21cba", "correct": false},
        {"text": "...12/21...", "correct": false}
      ]
    },
    {
      "question": "regex: ^([^0-9]{2}-[0\\-9]{3})$ pasuje do:",
      "answers": [
        {"text": "aa-000", "correct": false},
        {"text": "aa-001", "correct": false},
        {"text": "^0-00-", "correct": false},
        {"text": "aa-00-", "correct": true},
        {"multiCorrect": true}
      ]
    },
    {
      "question": "view: atrybut asp-validation-summary=\"",
      "answers": [
        {"text": "Oznaczony Tag przeksztalca w input, który skryptem waliduje dane", "correct": false},
        {"text": "W Tagu tym wyświetlane będą błędy walidacji dla wskazanej właściwości modelu", "correct": false},
        {"text": "Przekształca oznaczony Tag w skrypt walidujący dane", "correct": false},
        {"text": "W Tagu tym wyświetlane będą błędy walidacji dla całego modelu", "correct": true}
      ]
    },
    {
      "question": "view: atrybut asp-validation-fore\"",
      "answers": [
        {"text": "Oznaczony Tag przekształca w input, który skryptem waliduje dane", "correct": false},
        {"text": "W Tagu tym wyświetlane będą błędy walidacji dla wskazanej właściwości modelu", "correct": true},
        {"text": "Przekształca oznaczony Tag w skrypt walidujący dane", "correct": false},
        {"text": "W Tagu tym wyświetlane będą błędy walidacji dla całego modelu", "correct": false}
      ]
    },
    {
      "question": "model: atrybut [CreditCard]",
      "answers": [
        {"text": "Umieszczony przed klasą dodaje właściwości obsługując kartę kredytową", "correct": false},
        {"text": "Umieszczone przed właściwościom waliduje poprawność wpisanego numeru bankowego", "correct": false},
        {"text": "Umieszczone przed właściwością waliduje poprawność wpisanego numeru karty kredytowej", "correct": true},
        {"text": "skrypt migracyjny EF tworzy zestaw pól po stronie bazy obsługi kart płatniczych", "correct": false}
      ]
    },
    {
      "question": "model: atrybut [Compare]:",
      "answers": [
        {"text": "Umieszczamy przed klasą w celu porównania z inną klas", "correct": false},
        {"text": "Umieszczamy przed właściwością, aby porównać ją z inną właściwością w klasie modelu", "correct": true},
        {"text": "Wykorzystywana w mechanizmie walidacji danych", "correct": true},
        {"text": "wykorzystywana do tworzenia skryptów migracyjnych", "correct": false},
        {"multiCorrect": true}
      ]
    },
    {
      "question": "model: atrybut [RegularExpression]",
      "answers": [
        {"text": "umieszczamy przed klasą modelu", "correct": false},
        {"text": "Umieszczamy przed klasą kontrolera", "correct": false},
        {"text": "umieszczamy przed argumentami w metodzie akcji kontrolera", "correct": false},
        {"text": "umieszczane przed właściwościami modelu", "correct": true}
      ]
    },
    {
      "question": "Jeśli odwołam się do adresu http://localhost jakie protokoły zostaną użyte?",
      "answers": [
        {"text": "TLS", "correct": false},
        {"text": "HTTP", "correct": true},
        {"text": "UDP", "correct": false},
        {"text": "TCP", "correct": true},
        {"multiCorrect": true}
      ]
    }
  ]
};

// Zmienne stanu quizu
let currentQuestionIndex = 0;
let score = 0;
let selectedQuestions = [];

// Elementy DOM
const questionText = document.getElementById('question-text');
const answersContainer = document.getElementById('answers-container');
const nextBtn = document.getElementById('next-btn');
const quizProgress = document.getElementById('quiz-progress');
const resultContainer = document.getElementById('result-container');
const scoreDisplay = document.getElementById('score');
const restartBtn = document.getElementById('restart-btn');
const questionContainer = document.getElementById('question-container');

// Inicjalizacja quizu
function initQuiz() {
    // Losowanie 15 unikalnych pytań
    selectedQuestions = [...quizData.questions]
        .sort(() => 0.5 - Math.random())
        .slice(0, 15);
    
    currentQuestionIndex = 0;
    score = 0;
    resultContainer.classList.add('hidden');
    questionContainer.classList.remove('hidden');
    nextBtn.textContent = 'Dalej';
    loadQuestion();
}

// Ładowanie pytania
function loadQuestion() {
    const currentQuestion = selectedQuestions[currentQuestionIndex];
    questionText.textContent = currentQuestion.question;
    answersContainer.innerHTML = '';
    
    quizProgress.textContent = `Pytanie ${currentQuestionIndex + 1}/15`;
    
    currentQuestion.answers.forEach(answer => {
        // Pomijamy odpowiedź jeśli jest to tylko flaga multiCorrect
        if (answer.hasOwnProperty('multiCorrect')) return;
        
        const answerElement = document.createElement('div');
        answerElement.classList.add('answer-option');
        
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = `answer-${answer.text}`;
        checkbox.dataset.correct = answer.correct;
        
        const label = document.createElement('label');
        label.htmlFor = `answer-${answer.text}`;
        label.textContent = answer.text;
        
        answerElement.appendChild(checkbox);
        answerElement.appendChild(label);
        answersContainer.appendChild(answerElement);
    });
}
// Sprawdzanie odpowiedzi
function checkAnswers() {
    const answerOptions = document.querySelectorAll('.answer-option');
    let allCorrect = true;
    let anySelected = false;
    
    answerOptions.forEach(option => {
        const checkbox = option.querySelector('input');
        const isCorrect = checkbox.dataset.correct === 'true';
        
        if (checkbox.checked) {
            anySelected = true;
            if (isCorrect) {
                option.classList.add('correct');
            } else {
                option.classList.add('incorrect');
                allCorrect = false;
            }
        } else if (isCorrect) {
            option.classList.add('missing');
            allCorrect = false;
        }
    });
    
    // Jeśli użytkownik nie zaznaczył żadnej odpowiedzi, traktujemy jako błędną
    if (!anySelected) {
        allCorrect = false;
    }
    
    if (allCorrect) {
        score++;
    }
    
    // Blokowanie zmiany odpowiedzi po sprawdzeniu
    answerOptions.forEach(option => {
        option.querySelector('input').disabled = true;
    });
    
    return allCorrect;
}

// Przejście do następnego pytania lub zakończenie quizu
function nextQuestion() {
    if (nextBtn.textContent === 'Dalej') {
        checkAnswers();
        nextBtn.textContent = currentQuestionIndex < selectedQuestions.length - 1 ? 'Następne pytanie' : 'Zobacz wynik';
    } else {
        currentQuestionIndex++;
        
        if (currentQuestionIndex < selectedQuestions.length) {
            questionContainer.classList.remove('fade-in');
            void questionContainer.offsetWidth; // Trigger reflow
            questionContainer.classList.add('fade-in');
            loadQuestion();
            nextBtn.textContent = 'Dalej';
        } else {
            showResult();
        }
    }
}

// Wyświetlenie wyniku
function showResult() {
    questionContainer.classList.add('hidden');
    resultContainer.classList.remove('hidden');
    scoreDisplay.textContent = score;
}

// Event listeners
nextBtn.addEventListener('click', nextQuestion);
restartBtn.addEventListener('click', initQuiz);

// Start quizu
initQuiz();