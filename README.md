# COFFEE CONNECT

Een React Native applicatie voor het exploreren van de beste koffies. Gemaakt door: Kubra Kizilkilic
Gebouwd met Expo en TypeScript

## FEATURES

### beheer
 - zoeken en filteren van koffies

 ### API Integratie
- toevoegen van nieuwe koffies

### koffie locaties
- locaties van de koffiezetters

## Technische Details

### Gebouwd met

- React Native & Expo
- TypeScript

- AsyncStorage voor lokale opslag
- React Context voor state management
- Expo Haptics voor feedback
- Expo Router voor navigatie
- Expo Location & Maps
- Expo Notifications
- Expo Calendar
- Expo Image Picker
- Expo file system
- Expo web-browser

### Project Structuur

```plaintext
project_react_native/
├── app/              # Expo Router pages
│   ├── (tabs)/       # Tab-based navigatie schermen
│   └── (modals)/     # Modale schermen
├── src/              # Source code
│   ├── components/   # React componenten
│   │   ├── ui/       # Herbruikbare UI componenten
│   │   └── features/ # Feature-specifieke componenten
│   ├── hooks/        # Custom React hooks
│   ├── services/     # API en device services
│   ├── config/       # App configuratie en constanten
│   ├── types/        # TypeScript type definities
│   ├── utils/        # Helper functies
│   └── styles/       # Styling definities
└── db.json           # Database
```

### State Management

TO DO

### Data Flow

TO DO

## Getting Started

### Vereisten

- Node.js
- npm
- Expo CLI
- iOS Simulator of Android Emulator

### Installatie

```bash
# Clone het project
git clone [repository-url]

# Installeer dependencies
npm install

# Start de development server
npx expo start
```

### Configuratie

1. Maak een `.env` file op basis van `.env.example`
2. Voeg je MAL API credentials toe
3. Configureer lokale development URLs

### Database Setup

Deze app gebruikt JSON Server als mock database voor development. Setup:

1. Installeer JSON Server globaal:

```bash
npm install -g json-server
```

2. Maak een `db.json` file aan in de root:

```json
{
  "coffees": []
}
```

3. Start JSON Server (aparte terminal):

```bash
json-server --watch db.json --port 3000
```

De server draait nu op `http://localhost:3000` met deze endpoints:
- GET /coffees - Haal alle coffee's op
- GET /coffees/:id - Haal specifieke coffee op
- POST /coffees - Voeg nieuwe coffee toe
TO DO - PUT /coffees/:id - Update coffee
TO DO - DELETE /coffees/:id - Verwijder coffee

### Environment Setup

Maak een `.env` file met:

```plaintext
MAL_CLIENT_ID=your_mal_client_id
```

### API Setup

De app communiceert met:

- JSON Server voor lokale data opslag
- [coffee connect](https://sampleapis.assimilate.be/coffee/hot/) API voor warme coffee informatie
- [coffee connect](https://sampleapis.assimilate.be/coffee/iced/) API voor koude coffee informatie

Development URLs:

- Android Emulator: <http://10.0.2.2:3000>
- iOS Simulator: <http://localhost:3000>
- Fysiek Device: http://{LOCAL_IP}:3000

## Development

### Code Stijl

- TypeScript strict mode
- ESLint configuratie
- Prettier voor formatting

### Best Practices

- Component compositie voor herbruikbaarheid
- Custom hooks voor gedeelde logica
- Consistent error handling
- TypeScript types voor type safety


## Roadmap
Toekomstige features en verbeteringen:
- [ ] Dark mode support

















# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
    npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.
