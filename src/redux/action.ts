export const HANDLE_MODAL = "HANDLE_MODAL"

interface HandleModalAction {
  type: typeof HANDLE_MODAL,
  isOpen: boolean
}

export type AppActions = HandleModalAction

export const handleModal = (isOpen: boolean): AppActions => ({
  type: HANDLE_MODAL,
  isOpen: isOpen
})

