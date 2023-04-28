const token = 'b043b8c69e3b72eda4ff64c43d7033ba042136294ec859da'
// TODO: change token

export const server_calls = {
    get: async () => {
        const response = await fetch(`https://shine-sugared-balaur.glitch.me/api/characters`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`,
                'Access-Control-Allow_Origin': '*',
            }
        });

        if (!response.ok){
            throw new Error('Failed to fetch data from server');
        }

        return await response.json();
    },
    
    create: async (data: any = {}) => {
        const response = await fetch(`https://shine-sugared-balaur.glitch.me/api/characters`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`,
                'Access-Control-Allow_Origin': '*',
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            throw new Error('Failed to create new data on server');
        }

        return await response.json();
    },

    update: async (id: string, data: any = {}) => {
        const response = await fetch(`https://shine-sugared-balaur.glitch.me/api/characters/${id}`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`,
                'Access-Control-Allow_Origin': '*',
            },
            body: JSON.stringify(data)
        })

        if (!response.ok) {
            throw new Error('Failed to update data on server');
        }

        return await response.json();
    },

    delete: async (id: string) => {
        const response = await fetch(`https://shine-sugared-balaur.glitch.me/api/characters/${id}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`,
                'Access-Control-Allow_Origin': '*',
            }    
        });

        if (!response.ok) {
            throw new Error('Failed to delete data on server')
        }

        return;
    },
}