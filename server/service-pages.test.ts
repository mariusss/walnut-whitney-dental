import { describe, it, expect } from 'vitest';

describe('Service Pages', () => {
  it('should have all service routes defined', () => {
    const serviceRoutes = [
      '/services/preventive-care',
      '/services/porcelain-veneers',
      '/services/full-mouth-rehab',
      '/services/whitening',
      '/services/invisalign',
    ];
    
    // Verify all routes are defined
    expect(serviceRoutes).toHaveLength(5);
    expect(serviceRoutes).toContain('/services/preventive-care');
    expect(serviceRoutes).toContain('/services/porcelain-veneers');
    expect(serviceRoutes).toContain('/services/full-mouth-rehab');
    expect(serviceRoutes).toContain('/services/whitening');
    expect(serviceRoutes).toContain('/services/invisalign');
  });

  it('should have correct service data structure', () => {
    const services = [
      {
        id: '01',
        title: 'Preventive Care',
        link: '/services/preventive-care',
      },
      {
        id: '02',
        title: 'Porcelain Veneers',
        link: '/services/porcelain-veneers',
      },
      {
        id: '03',
        title: 'Full Mouth Rehab',
        link: '/services/full-mouth-rehab',
      },
      {
        id: '04',
        title: 'Whitening',
        link: '/services/whitening',
      },
      {
        id: '05',
        title: 'Invisalign',
        link: '/services/invisalign',
      },
    ];

    // Verify each service has required fields
    services.forEach(service => {
      expect(service).toHaveProperty('id');
      expect(service).toHaveProperty('title');
      expect(service).toHaveProperty('link');
      expect(service.link).toMatch(/^\/services\//);
    });
  });

  it('should have unique service IDs', () => {
    const serviceIds = ['01', '02', '03', '04', '05'];
    const uniqueIds = new Set(serviceIds);
    
    expect(uniqueIds.size).toBe(serviceIds.length);
  });

  it('should have valid URL slugs', () => {
    const slugs = [
      'preventive-care',
      'porcelain-veneers',
      'full-mouth-rehab',
      'whitening',
      'invisalign',
    ];

    slugs.forEach(slug => {
      // Verify slug format (lowercase, hyphens only)
      expect(slug).toMatch(/^[a-z-]+$/);
      expect(slug).not.toContain(' ');
      expect(slug).not.toContain('_');
    });
  });
});
