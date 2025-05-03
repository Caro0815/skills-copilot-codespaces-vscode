function skillsMember()
{
    return {
        name: "Miembro",
        description: "Un miembro de la comunidad.",
        skills: [
            {
                name: "Habilidades de miembro",
                description: "Habilidades básicas de un miembro de la comunidad.",
                level: 1,
                effects: [
                    {
                        type: "increase",
                        target: "communitySupport",
                        value: 5
                    }
                ]
            }
        ]
    };
}