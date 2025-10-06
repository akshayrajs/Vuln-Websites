# syntax=docker/dockerfile:1.4
FROM node:18-alpine

WORKDIR /app

# Create a new Next.js application
RUN npm init -y && \
    npm install next@14.0.0 react react-dom

# Create necessary directories
RUN mkdir -p pages api

# Create package.json with correct Next.js version
COPY <<EOF /app/package.json
{
  "name": "nextjs-middleware-bypass-test",
  "version": "1.0.0",
  "description": "Vulnerable Next.js app for testing middleware bypass (CVE-2025-29927)",
  "main": "index.js",
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start"
  },
  "dependencies": {
    "next": "14.0.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  }
}
EOF

# Create main page
COPY <<EOF /app/pages/index.js
import Link from 'next/link';

export default function Home() {
  return (
    <main style={{ fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", color: '#222', lineHeight: 1.6 }}>
      {/* Hero Section */}
      <section style={{
        minHeight: '100vh',
        padding: '4rem 2rem',
        backgroundColor: '#0070f3',
        color: '#fff',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
      }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem', maxWidth: '600px' }}>
          Next.js Middleware Bypass Test App
        </h1>
        <p style={{ fontSize: '1.25rem', maxWidth: '700px' }}>
          Experience next-level route protection with middleware. Explore how middleware secures your web app’s critical routes and APIs.
        </p>
        <nav style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          {[
            { href: '/dashboard', label: 'Dashboard' },
            { href: '/admin', label: 'Admin' },
            { href: '/profile', label: 'Profile' },
            { href: '/api/secret', label: 'API Secret' },
          ].map(({ href, label }) => (
            <Link
              href={href}
              key={href}
              style={{
                display: 'inline-block',
                backgroundColor: '#fff',
                color: '#0070f3',
                padding: '0.75rem 1.5rem',
                borderRadius: '8px',
                textDecoration: 'none',
                fontWeight: '600',
                boxShadow: '0 3px 10px rgba(0, 0, 0, 0.15)',
                transition: 'background-color 0.3s ease, color 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={e => {
                e.currentTarget.style.backgroundColor = '#e6f0ff';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.backgroundColor = '#fff';
              }}
            >
              {label}
            </Link>
          ))}
        </nav>
      </section>

      {/* Middleware Overview Section */}
      <section style={{
        minHeight: '100vh',
        padding: '4rem 3rem',
        backgroundColor: '#f5f7fa',
        color: '#111',
        maxWidth: '900px',
        margin: 'auto',
      }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>What is Middleware in Next.js?</h2>
        <p>
          Middleware in Next.js allows you to run code before a request is completed and customize the response, enabling powerful route protection, redirects, and authentication checks.
        </p>
        <p>
          It runs before rendering pages or API routes and can intercept requests to secure pages or redirect unauthorized users seamlessly.
        </p>

        <h3 style={{ marginTop: '2rem' }}>Common uses of Middleware:</h3>
        <ul>
          <li>Authentication and access control</li>
          <li>Localization and internationalization</li>
          <li>Redirect unauthorized users</li>
          <li>Performance optimizations through caching rules</li>
        </ul>

        <p>
          Middleware unlocks flexible and reusable security measures across your entire Next.js application for consistent protection.
        </p>
      </section>

      {/* Best Practices Section */}
      <section style={{
        minHeight: '100vh',
        padding: '4rem 3rem',
        backgroundColor: '#fff',
        color: '#111',
        maxWidth: '900px',
        margin: 'auto 0 4rem 0',
      }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Security Best Practices for Middleware</h2>
        <ol>
          <li><strong>Least Privilege:</strong> Only protect routes that truly require restricted access.</li>
          <li><strong>Centralize Authentication:</strong> Use middleware to centralize auth logic rather than duplicating it on pages.</li>
          <li><strong>Handle Edge Cases:</strong> Properly handle tokens expiration, unauthorized status, and redirection flows.</li>
          <li><strong>Minimize Payload:</strong> Keep middleware logic lightweight to avoid performance bottlenecks.</li>
          <li><strong>Test Thoroughly:</strong> Automated and manual tests to verify that all protected routes cannot be bypassed.</li>
        </ol>
        <p>
          Implementing middleware effectively protects your sensitive resources and enhances user experience by preventing unauthorized access seamlessly on the server edge.
        </p>
      </section>

      <footer style={{
        textAlign: 'center',
        padding: '2rem 1rem',
        color: '#666',
        fontSize: '0.9rem',
        borderTop: '1px solid #ddd',
      }}>
        © 2025 Security Labs. All rights reserved.
      </footer>
    </main>
  );
}
EOF

# Create unauthorized page
COPY <<EOF /app/pages/unauthorized.js
export default function Unauthorized() {
  return (
    <div>
      <h1>Access Denied</h1>
      <p>You are not authorized to access this page.</p>
      <p>Please login or use appropriate credentials.</p>
    </div>
  );
}
EOF

# Create protected pages
COPY <<EOF /app/pages/dashboard.js
export default function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <p>This is a protected dashboard page</p>
      <p>If you can see this, either you're authenticated or you've bypassed the middleware!</p>
      <p style={{color: 'red', fontWeight: 'bold'}}>VULNERABILITY CONFIRMED: Middleware bypass successful</p>
    </div>
  );
}
EOF

COPY <<EOF /app/pages/admin.js
export default function Admin() {
  return (
    <div>
      <h1>Admin Panel</h1>
      <p>This is a protected admin page</p>
      <p>If you can see this, either you're authenticated or you've bypassed the middleware!</p>
      <p style={{color: 'red', fontWeight: 'bold'}}>VULNERABILITY CONFIRMED: Middleware bypass successful</p>
    </div>
  );
}
EOF

COPY <<EOF /app/pages/profile.js
export default function Profile() {
  return (
    <div>
      <h1>User Profile</h1>
      <p>This is a protected profile page</p>
      <p>If you can see this, either you're authenticated or you've bypassed the middleware!</p>
      <p style={{color: 'red', fontWeight: 'bold'}}>VULNERABILITY CONFIRMED: Middleware bypass successful</p>
    </div>
  );
}
EOF

# Create protected API endpoint
COPY <<EOF /app/pages/api/secret.js
export default function handler(req, res) {
  res.status(200).json({ 
    message: "This is a protected API endpoint", 
    data: "secret-data-123",
    vulnerabilityStatus: "CONFIRMED: Middleware bypass successful"
  });
}
EOF

# Create improved middleware to protect routes
COPY <<EOF /app/middleware.js
import { NextResponse } from 'next/server';

export function middleware(request) {
  // Protected routes
  const protectedPaths = ['/dashboard', '/admin', '/profile', '/api/secret'];
  const path = request.nextUrl.pathname;

  // Check if the path is protected
  if (protectedPaths.some(prefix => path.startsWith(prefix))) {
    // Standard Next.js middleware redirect behavior
    // This is the default behavior when redirecting users to unauthorized pages
    return NextResponse.redirect(new URL('/unauthorized', request.url));
  }
  
  return NextResponse.next();
}

// Standard Next.js middleware matcher configuration
export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)']
};
EOF

# Expose port and start Next.js
EXPOSE 3000
CMD ["npm", "run", "dev"] 
