# Contributing to Startup Weekend Brussels Website 💻

Thank you for your interest in contributing to the Startup Weekend Brussels website! This document provides guidelines for contributing to the codebase.

## 🚀 Quick Start

### Prerequisites

- **Node.js** 18+ and npm
- **Git** for version control
- Basic knowledge of **Astro**, **React**, and **Tailwind CSS**

### Local Development

1. **Clone the repository**

   ```bash
   git clone https://github.com/startup-weekend-brussels/startup-weekend-brussels.git
   cd startup-weekend-brussels
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:4321
   ```

## 🛠️ Tech Stack

- **Framework**: [Astro](https://astro.build/) - Fast, modern web framework
- **UI Library**: [React](https://react.dev/) - For interactive components
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- **Forms**: [Formspree](https://formspree.io/) - Form handling service
- **Deployment**: GitHub Pages with GitHub Actions
- **Domain**: https://startupweekend.brussels

## 📁 Project Structure

```
/
├── public/                  # Static assets
│   ├── Startup-Weekend-Brussels.png
│   ├── onyx-logo.svg
│   ├── favicon.ico
│   ├── sitemap.xml
│   ├── robots.txt
│   └── CNAME
├── src/
│   ├── components/          # React components
│   │   ├── RegistrationForm.jsx
│   │   └── PreviousEditionsForm.jsx
│   ├── layouts/             # Astro layouts
│   │   └── Layout.astro
│   └── pages/               # Astro pages (routes)
│       ├── index.astro      # Homepage
│       ├── about.astro      # About SW
│       ├── 2026-edition.astro
│       └── previous-editions.astro
├── .github/workflows/       # GitHub Actions
├── astro.config.mjs        # Astro configuration
├── tailwind.config.mjs     # Tailwind configuration
└── package.json
```

## 🎯 Types of Contributions

### 1. 🐛 Bug Fixes

- Fix broken links or forms
- Correct typos or content errors
- Resolve responsive design issues
- Fix accessibility problems

### 2. ✨ Feature Improvements

- Enhance user experience
- Add new interactive components
- Improve performance
- Better SEO optimization

### 3. 📝 Content Updates

- Update event information
- Add success stories from previous editions
- Improve copy and messaging
- Add new resources or links

### 4. 🎨 Design Enhancements

- Improve visual design
- Better mobile responsiveness
- Enhanced animations or interactions
- Accessibility improvements

## 🔄 Pull Request Process

### Before You Start

1. **Check existing issues** to avoid duplicate work
2. **Create an issue** for significant changes
3. **Fork the repository** to your GitHub account

### Making Changes

1. **Create a feature branch**

   ```bash
   git checkout -b feature/your-feature-name
   # or
   git checkout -b fix/your-bug-fix
   ```

2. **Make your changes**

   - Follow existing code style and conventions
   - Test your changes locally
   - Ensure responsive design works on mobile

3. **Test thoroughly**
   ```bash
   npm run build    # Test production build
   npm run preview  # Preview production build
   ```

### Submitting Changes

1. **Commit with clear messages**

   ```bash
   git add .
   git commit -m "feat: add new registration validation"
   # or
   git commit -m "fix: resolve mobile navigation issue"
   ```

2. **Push to your fork**

   ```bash
   git push origin feature/your-feature-name
   ```

3. **Create Pull Request**
   - Use a clear, descriptive title
   - Reference any related issues
   - Include screenshots for visual changes
   - Describe what you've changed and why

## 📋 Pull Request Template

```markdown
## Description

Brief description of the changes

## Type of Change

- [ ] Bug fix
- [ ] New feature
- [ ] Content update
- [ ] Design improvement
- [ ] Documentation update

## Testing

- [ ] Tested locally in development
- [ ] Tested production build
- [ ] Tested on mobile devices
- [ ] Forms work correctly (if applicable)

## Screenshots

(If applicable, add screenshots of visual changes)

## Related Issues

Fixes #(issue number)
```

## ✅ Code Guidelines

### General Principles

- **Keep it simple** - Prioritize clarity over cleverness
- **Mobile-first** - Ensure responsive design
- **Accessibility** - Use semantic HTML and proper ARIA labels
- **Performance** - Optimize images and minimize bundle size

### Astro Pages

- Use clear, semantic HTML structure
- Include proper meta tags for SEO
- Add structured data for rich snippets
- Follow existing page structure patterns

### React Components

- Use functional components with hooks
- Keep components focused and reusable
- Include proper PropTypes or TypeScript types
- Handle loading and error states

### Styling (Tailwind CSS)

- Use existing design system classes
- Maintain consistent spacing and colors
- Ensure responsive design with proper breakpoints
- Follow existing component patterns

### Forms

- Validate input on both client and server side
- Provide clear error messages
- Ensure accessibility with proper labels
- Test form submissions thoroughly

## 🔍 Code Review Process

### What We Look For

1. **Functionality** - Does it work as intended?
2. **Code Quality** - Is it clean, readable, and maintainable?
3. **Design** - Does it match existing design patterns?
4. **Accessibility** - Is it usable by everyone?
5. **Performance** - Does it impact site speed?
6. **SEO** - Are meta tags and structured data correct?

### Review Timeline

- **Small fixes**: Usually reviewed within 1-2 days
- **New features**: May take 3-5 days for thorough review
- **Major changes**: Require discussion and may take longer

## 📊 SEO & Analytics

### Important SEO Elements

- **Meta titles and descriptions** for each page
- **Structured data** (JSON-LD) for events and organization
- **Canonical URLs** to prevent duplicate content
- **Sitemap.xml** and robots.txt maintenance
- **Open Graph** and Twitter Card tags

### Form Endpoints

- **2026 Pre-registration**: `https://formspree.io/f/xovpovor`
- **Previous Editions**: `https://formspree.io/f/mwpwdved`

## 🚨 Important Notes

### Content Guidelines

- Keep content focused on **Startup Weekend Brussels**
- Maintain professional but enthusiastic tone
- Ensure accuracy of event information
- Include clear calls-to-action

### Technical Considerations

- All external links use `rel="noopener"` (not `noreferrer` for SEO)
- Images should be optimized for web
- Forms must work with JavaScript disabled
- Site must be fully responsive

### Deployment

- **Automatic deployment** via GitHub Actions
- **Production URL**: https://startupweekend.brussels
- **Staging**: GitHub Pages preview on PRs

## 🤝 Community

### Getting Help

- **Create an issue** for questions or bug reports
- **Join discussions** in pull requests and issues
- **Follow** [@swbru](https://x.com/swbru) for updates

### Code of Conduct

- Be respectful and constructive
- Focus on what's best for the community
- Help newcomers learn and contribute
- Celebrate entrepreneurship and innovation

## 📜 License

By contributing, you agree that your contributions will be used to promote Startup Weekend Brussels and the broader entrepreneurship community in Brussels.

---

**🚀 Ready to contribute?**

Start by checking our [open issues](https://github.com/startup-weekend-brussels/startup-weekend-brussels/issues) or create a new one to discuss your ideas!

_Thank you for helping make Startup Weekend Brussels amazing! 🙌_
