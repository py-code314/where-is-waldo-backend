import { prisma } from './lib/prisma.js'

async function main() {
  // Create a new scene with character coordinates
  const scene = await prisma.scene.create({
    data: {
      title: 'The Ski Slopes of Anarchy',
      description:
        'Hit the slopes! Amidst the snowy chaos, ski lifts, and runaway sleds, can you spot Wally, Wenda, Odlaw, and the Wizard before they glide away?',
      difficulty: 'EASY',
      imageUrl:
        'https://res.cloudinary.com/ddoq6urpb/image/upload/v1794785957/scene-skiing_rv6mpf.webp',
      previewUrl:
        'https://res.cloudinary.com/ddoq6urpb/image/upload/v1794785860/preview-skiing_e6a4mm.webp',

      characters: {
        create: [
          {
            minX: 84.4,
            maxX: 86.16,
            minY: 71.15,
            maxY: 77.43,
            character: {
              connectOrCreate: {
                where: { name: 'Wally' },
                create: {
                  name: 'Wally',
                  avatarUrl:
                    'https://res.cloudinary.com/ddoq6urpb/image/upload/v1794785681/wally_di11cs.webp',
                },
              },
            },
          },
          {
            minX: 48.49,
            maxX: 49.28,
            minY: 40.59,
            maxY: 43.46,
            character: {
              connectOrCreate: {
                where: { name: 'Wenda' },
                create: {
                  name: 'Wenda',
                  avatarUrl:
                    'https://res.cloudinary.com/ddoq6urpb/image/upload/v1794785680/wenda_pffx5n.webp',
                },
              },
            },
          },
          {
            minX: 6.41,
            maxX: 7.43,
            minY: 74.22,
            maxY: 77.66,
            character: {
              connectOrCreate: {
                where: { name: 'Wizard' },
                create: {
                  name: 'Wizard',
                  avatarUrl:
                    'https://res.cloudinary.com/ddoq6urpb/image/upload/v1794785680/wizard_lcqsrb.webp',
                },
              },
            },
          },
          {
            minX: 31.36,
            maxX: 32.11,
            minY: 62.88,
            maxY: 64.6,
            character: {
              connectOrCreate: {
                where: { name: 'Odlaw' },
                create: {
                  name: 'Odlaw',
                  avatarUrl:
                    'https://res.cloudinary.com/ddoq6urpb/image/upload/v1794785680/odlaw_ty30vm.webp',
                },
              },
            },
          },
        ],
      },
    },
    include: {
      characters: {
        include: {
          character: true,
        },
      },
    },
  })
  console.log('Created scene:', JSON.stringify(scene, null, 2))

  // Fetch all scenes with characters
  const allScenes = await prisma.scene.findMany({
    include: {
      characters: true,
    },
  })
  console.log('All scenes:', JSON.stringify(allScenes, null, 2))
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
