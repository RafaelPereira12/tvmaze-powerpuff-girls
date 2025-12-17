##Deployed at\
[View the app deployed] (https://6942d599055c899f18a4e0b9--mellow-youtiao-62f12b.netlify.app/episode-details/2/1)

## Getting Started

Follow these steps to run the project locally.

**1. Install dependencies**\
npm install

**2. Start the development server**\
npm run dev


The application will run on http://localhost:3000 by default.

**3. Run tests**\
npm run test



## Architecture Decisions

**Component-based**\
Components are ready to be reusable, and written with the intent of having a single responsibility.

**Data fetching with TanStack Query**\
Server state is managed through TanStack Query queries that provides caching, loading state, and error handling.

**Client-side routing**\
Routes are organized by page component folders that live inside the app folder. In order to support AppRouter dynamic routing patterns, page component folders may contain nested folders (Ex: episode-details > `[season]`).

**Testing** \
Tests focus on user behavior using Vitest. (Had a lack of knowledge, but interest in trying and learning, which led to the use of AI to develop EpisodeDetails.test.ts, given that testing is not something that I feel comfortable to develop)

**Folder structure**
```
app/
├── accessibility/           # Accessibility helpers
├── api/  
│   └── posts/               # Mock API routes  
├── assets/  
│   └── images/              # Static images  
├── base/                    # Shared layout components   
├── common/                  # Reusable UI components   
├── container/               # Page specific containers   
├── episode-details/         # Episode Details page and related components  
├── favorites/               # Favorites page and related components  
├── search-result/           # Search Result page and related components  
├── providers/               # TanStack Query provider  
├── test/                    # Unit tests  
├── utils/                   # Components Utility functions  
├──data/                     # Mock DB for favorites  
```


## Key Trade-offs

**TanStack Query vs manual state management**\
Adds a dependency and learning curve but simplifies caching, loading, and error handling.

**Client-side fetching** \
Improves speed but may affect SEO and initial load performance.


## Improvements with More Time

**Accordion Component**\
Development of an Accordion component to replace the Atlassian Kit [DropdownMenu](https://atlassian.design/components/dropdown-menu/examples), as it is better suited for displaying Seasons and their respective Episodes on the main page, enhancing the UI and user experience.

**Expand testing**\
Get a better and deeper understanding of testing, in order to develop unit tests for async functions, and component tests. Develop tests for core logic.

**Accessibility Improvements**\
Development of a keyboard navigation script. While Atlassian Kit components already support keyboard navigation, future components, such as the Accordion component, will require dedicated keyboard navigation instructions. 

**Search**\
Research and development of a method to extend search criteria, for example, searching by name. Currently, the TVMaze API only allows searching for episodes by number or date.

**Favorites**\
Research and development of a method that uses the mock DB json file for the Favorites logic






