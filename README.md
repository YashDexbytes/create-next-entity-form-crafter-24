# Entity Form Crafter (EFC) - Next.js 14 Version

A powerful and modern Next.js 14 starter template for building dynamic forms and entity management systems with a beautiful UI and extensive features.

## Quick Start

```bash
npx create-next-entity-form-crafter-24 my-app
cd my-app
```

Before starting the development server, set up your environment variables:
1. Copy `.env.example` to `.env`
2. Update the values in `.env` with your configuration

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Environment Variables

The following environment variables are required:

```env
# API Configuration
NEXT_PUBLIC_API_URL=http://localhost:3000

# Domain Configuration
NEXT_PUBLIC_DOMAIN_NAME=localhost

# Google ReCAPTCHA
NEXT_PUBLIC_RECAPCHA_KEY=your_recaptcha_key_here

# AWS S3 Configuration
NEXT_PUBLIC_AWS_REGION=your_aws_region
NEXT_PUBLIC_AWS_ACCESS_KEY_ID=your_aws_access_key_id
NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY=your_aws_secret_access_key
NEXT_PUBLIC_S3_BUCKET_NAME=your_s3_bucket_name

# Admin and Tenant Configuration
NEXT_PUBLIC_ADMIN_DOMAIN_NAME=admin
NEXT_PUBLIC_TENANT_DOMAIN=demo
```

Copy `.env.example` to `.env` and update the values according to your setup.

## Features

- ⚡️ **Next.js 14** with App Router
- 🎨 **Tailwind CSS** for styling
- 🔷 **Material UI** components
- 📊 **ApexCharts** for beautiful charts
- 🗺️ **JSVectorMap** for map visualizations
- 📱 **Responsive Design** - Mobile-first approach
- 🔒 **Authentication Ready** with secure practices
- 📝 **Form Management** with React Hook Form & Formik
- 🎭 **State Management** with Redux Toolkit
- 🌐 **API Integration** with Axios
- 📅 **Date Handling** with multiple date picker options
- 🎯 **Type Safety** with TypeScript
- 🧹 **Code Quality** with ESLint & Prettier
- 🔄 **Data Grid** for table management
- 📱 **Phone Input** with international format support
- ✅ **Form Validation** with Yup
- 🖼️ **Image Optimization** with Sharp
- 🌍 **AWS S3 Integration** for file storage

## Project Structure

```
my-app/
├── src/
│   ├── app/
│   ├── components/
│   ├── hooks/
│   ├── lib/
│   ├── store/
│   └── types/
├── public/
├── styles/
└── package.json
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting

## Dependencies

### Core
- Next.js 14
- React 18
- TypeScript
- Tailwind CSS

### UI Components
- Material UI
- ApexCharts
- JSVectorMap
- React Date Range
- React DatePicker
- React Phone Input 2
- React Select

### State Management & Forms
- Redux Toolkit
- React Hook Form
- Formik
- Yup Validation

### API & Storage
- Axios
- AWS SDK for S3
- Sharp for image processing

### Development Tools
- ESLint
- Prettier
- TypeScript ESLint
- Tailwind CSS Configuration

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the ISC License.

## Author

Created by YashDexbytes

## Support

For support, please raise an issue in the GitHub repository.
