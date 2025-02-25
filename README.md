# LIAISUN VFX - Film Production VFX Management

An Angular application for managing visual effects in film productions. This app helps VFX supervisors and producers to break down movie scripts, track visual effects elements, and manage production resources.

![LVFX App Screenshot](screenshot.png)

## Features

- Hierarchical breakdown of film production structure
  - Sequences
  - Scenes
  - Action Beats
  - Shots
- Collapsible rows for easy navigation
- Visual effects tracking and asset management
- Script-to-VFX breakdown capabilities
- Budget tracking and estimation

## Technical Stack

- Angular 17
- SCSS for styling
- TypeScript
- Responsive design

## Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── header/
│   │   ├── production-breakdown/
│   │   └── breakdown-row/
│   ├── models/
│   │   ├── production.model.ts
│   │   └── mock-data.ts
│   ├── services/
│   │   └── production.service.ts
│   └── app.module.ts
├── assets/
│   └── styles/
└── environments/
```

## Installation and Running

1. Clone the repository:
```bash
git clone https://github.com/owenbaldwin/claude-lvfx-test.git
cd claude-lvfx-test
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
ng serve
```

4. Open your browser and navigate to `http://localhost:4200`

## Future Enhancements

- Automated script parsing for VFX breakdown
- Cost estimation based on VFX complexity
- Integration with scheduling tools
- Collaboration features for team management
- Asset management system

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
