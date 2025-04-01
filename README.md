# TestGofleet

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 19.2.5.

## Local Setup

### Prerequisites

- Node.js (version 16.x or higher)
- npm (version 8.x or higher)
- Angular CLI (`npm install -g @angular/cli`)

### Installation Steps

1. Clone the repository:
   ```bash
   git clone [repository-URL]
   ```
2. Navigate to the project directory:
   ```bash
   cd TestGofleet
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   ng serve
   ```
5. Open your browser at `http://localhost:4200`

## Development

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

NOTE: `ng build --prod` is deprecated. Use `ng build --configuration production` instead for production builds.

## Main Components

### Core Module
- **Description**: Contains essential application-wide services, interfaces, and mock data:
  - **Services**: Submissions service for managing form submissions data.
  - **Models**: Interfaces for submissions, locations, and query parameters.
  - **Enums**: Status definitions (InReview, Completed, Uncompleted).
  - **Mocks**: Mock data generator for submissions with randomized locations in Toronto area.

### Features Module
- **Description**: Contains the main application components for submission management
  - **SubmissionsList**: Main component that displays the submissions list with filters and map/list view.
  - **MapLists**: Component that integrates Google Maps with the submissions list.
  - **SubmissionItem**: Reusable component that displays detailed information for each submission.
  - **Key features**:
    - Dual visualization (map/list)
    - Search filters
    - CSV export
    - Google Maps integration

## Other Components

### Layout Components

- **Description**: 
    - **LayoutComponent**: Main layout wrapper that structures the application's base template.
    - **HeaderComponent**: Navigation header component displaying the main menu and user controls.

### Shared Components

#### SVG Icon Component
- **Description**: A reusable component that renders SVG icons from the assets folder and supports customizable dimensions through inputs.

## Notes

- This project uses the latest version of Angular (v19+) and follows current Angular team recommendations:
  - **Signals** for reactive state management
  - **Standalone Components** for better modularity
  - **Control Flow** syntax (`@if`, `@for`)
  - **Required Inputs** for better component contracts