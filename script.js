import { prisma } from './lib/prisma.js'

async function main() {
  console.log('Start seeding db with multiple scenes using transaction...')

  const sceneQueries = [
    // Scene 1
    prisma.scene.create({
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
    }),

    // Scene 2
    prisma.scene.create({
      data: {
        title: 'Space Colony Chaos',
        description:
          'Aliens, floating debris, and bustling space stations. Can you find Wally, Wenda, Odlaw, and the Wizard wandering among the astronauts in this futuristic chaos?',
        difficulty: 'MEDIUM',
        imageUrl:
          'https://res.cloudinary.com/ddoq6urpb/image/upload/v1794785958/scene-space-station_elhlfh.webp',
        previewUrl:
          'https://res.cloudinary.com/ddoq6urpb/image/upload/v1794785861/preview-space-station_ucpuqj.webp',

        characters: {
          create: [
            {
              minX: 40.38,
              maxX: 40.72,
              minY: 61.61,
              maxY: 64.08,
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
              minX: 29.29,
              maxX: 29.69,
              minY: 51.14,
              maxY: 53.35,
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
              minX: 77.81,
              maxX: 78.41,
              minY: 56.86,
              maxY: 59.4,
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
              minX: 6.78,
              maxX: 7.29,
              minY: 68.39,
              maxY: 70.12,
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
    }),

    // Scene 3
    prisma.scene.create({
      data: {
        title: 'The Gobbling Gluttons',
        description:
          'A huge banquet where tables overflow with food and people crowd every corner. Wally, Wenda, Odlaw, and the Wizard are all somewhere in the middle of this mess.',
        difficulty: 'HARD',
        imageUrl:
          'https://res.cloudinary.com/ddoq6urpb/image/upload/v1794785959/scene-food-court_t5xxh7.webp',
        previewUrl:
          'https://res.cloudinary.com/ddoq6urpb/image/upload/v1794785861/preview-food-court_szifha.webp',

        characters: {
          create: [
            {
              minX: 56.71,
              maxX: 57.27,
              minY: 34.3,
              maxY: 37.81,
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
              minX: 38.73,
              maxX: 39.24,
              minY: 32.02,
              maxY: 33.86,
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
              minX: 84.47,
              maxX: 85.77,
              minY: 83.18,
              maxY: 83.18,
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
              minX: 39.92,
              maxX: 40.59,
              minY: 59.2,
              maxY: 61.45,
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
    }),
  ]

  // Add all scenes to db
  const createdScenes = await prisma.$transaction(sceneQueries)

  // console.log('Created scenes:', JSON.stringify(createdScenes, null, 2))
  console.log(`✅ ${createdScenes.length} scenes successfully added to the db`)

  // Fetch all scenes with characters
  const allScenes = await prisma.scene.findMany({
    include: {
      characters: {
        include: {
          character: true,
        },
      },
    },
  })
  console.log('All scenes:', JSON.stringify(allScenes, null, 2))
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error('❌ Error during seeding:', e)
    await prisma.$disconnect()
    process.exit(1)
  })
