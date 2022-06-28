import { Box, Button } from '@mui/material';
import Link from 'next/link';
import React from 'react';

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div>
      <Box sx={{ margin: '15px', display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        <Link href="/serverside-rendering" passHref>
          <Button variant="text" className="serverSideRendering">
            Server Side Rendering
          </Button>
        </Link>
        <Link href="/static-generation" passHref>
          <Button variant="text" className="staticGeneration">
            Static Generation
          </Button>
        </Link>
        <Link href="/dynamic" passHref>
          <Button variant="text" className="dynamic">
            Dynamic Routes
          </Button>
        </Link>
        <Link href="/TestTesterson/settings" passHref>
          <Button variant="text" className="dynamicRouteSegment">
            Dynamic Route Segments
          </Button>
        </Link>
        <Link href="/dynamic-imports" passHref>
          <Button variant="text" className="dynamicImports">
            Dynamic Imports
          </Button>
        </Link>
        <Link href="/env-vars" passHref>
          <Button variant="text" className="envVars">
            Environment Vars
          </Button>
        </Link>
      </Box>

      {children}
    </div>
  );
};

export default Layout;
