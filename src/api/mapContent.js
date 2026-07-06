import { ui } from '../i18n/ui'
import { resolveAssetUrl } from '../utils/resolveAssetUrl'

export function mapApiToTranslations(api) {
  return {
    meta: {
      ...api.meta,
      logoUrl: resolveAssetUrl(api.meta?.logoUrl, '/assets/logo.png'),
    },
    nav: api.nav,
    hero: {
      ...api.hero,
      backgroundUrl: resolveAssetUrl(api.hero?.backgroundUrl, '/assets/hero-bg.png'),
    },
    about: {
      ...api.about,
      imageUrl: resolveAssetUrl(api.about?.imageUrl, '/assets/about-ship.png'),
    },
    services: api.services,
    projects: {
      title: api.projects.title,
      pageSize: api.projects.pageSize ?? api.meta?.projectsPageSize ?? 3,
      totalCount: api.projects.totalCount,
      items: (api.projects.items ?? []).map((project) => ({
        id: project.id,
        title: project.title,
        client: project.client,
        description: project.description,
        image: resolveAssetUrl(project.imageUrl, '/assets/project-1.png'),
      })),
    },
    whyChooseUs: api.whyChooseUs,
    clients: {
      title: api.clients.title,
      items: (api.clients.items ?? []).map((client) => ({
        id: client.id,
        name: client.name,
        logo: resolveAssetUrl(client.logoUrl, '/assets/logo.png'),
        websiteUrl: client.websiteUrl,
      })),
    },
    contact: {
      ...api.contact,
      imageUrl: resolveAssetUrl(api.contact?.imageUrl, '/assets/contact-ship.png'),
      logoUrl: resolveAssetUrl(
        api.contact?.logoUrl ?? api.meta?.logoUrl,
        '/assets/logo.png',
      ),
    },
  }
}

export function mapStaticFallback(staticContent, lang) {
  return {
    ...staticContent,
    meta: {
      ...staticContent.meta,
      logoUrl: staticContent.meta.logoUrl ?? '/assets/logo.png',
    },
    hero: {
      ...staticContent.hero,
      backgroundUrl: staticContent.hero.backgroundUrl ?? '/assets/hero-bg.png',
    },
    about: {
      ...staticContent.about,
      imageUrl: staticContent.about.imageUrl ?? '/assets/about-ship.png',
    },
    projects: {
      ...staticContent.projects,
      pageSize: 3,
    },
    contact: {
      ...staticContent.contact,
      imageUrl: staticContent.contact.imageUrl ?? '/assets/contact-ship.png',
      logoUrl: staticContent.contact.logoUrl ?? '/assets/logo.png',
      emailAddress: staticContent.contact.emailAddress ?? 'info@seasbroker.com',
      phoneNumber: staticContent.contact.phoneNumber ?? '+20123456789',
    },
  }
}

export function mergeWithUi(content, lang) {
  return {
    ...content,
    common: ui[lang].common,
    projects: {
      ...content.projects,
      pagesAriaLabel: ui[lang].projects.pagesAriaLabel,
    },
  }
}
